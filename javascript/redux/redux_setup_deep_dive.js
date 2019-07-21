/*
REDUX DATA-FLOW:
  1. STORE - (Hold Application State)
  2. ACTION - ( Dispatch Action to reducer in response to Event / User Interaction )
  3. REDUCER - ( Handles Action, Creates New State, Updates Store Accordingly )
    - rinse repeat -
*/

/************************************************
CREATE STORE EXAMPLE => '/src/index.js'
************************************************/
//create store in uppermost component i.e 'index.js'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom'


//THE APPLY MIDDLEWARE ARGUMENT IS HOW ASYNC ACTIONS ARE ENABLED
let store = createStore(rootReducer, applyMiddleware(thunk))

/* wrapping our <App /> with <Provider /> component gives all
our components the ability to access global store */
ReactDOM.render(
  <div id="app-container">
  <div className="super-awesome-background"></div>
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  </div>,
  document.getElementById('root')
);
/*================================================
CREATE STORE EXAMPLE
=================================================*/


/************************************************
DEFINE INITIAL STATE => ./reducers/initialState.js
************************************************/
//EXTRACTING INITIAL STATE TO ITS OWN FILE IS A WICKED SMORT IDEA
const initialState = {
  error: false,
  authenticated: false,
  currentUser: null,
  loading: true
}
export default { initialState }
/*================================================
End initial state example
=================================================*/


/************************************************
REDUCER EXAMPLE => 'src/reducers/sessionsReducer.js'
************************************************/
/* when we dispatch actions like in the 'handleLoginClick' method in 'ExampleApp'
   those actions are SENT to a reducer like this and approiately handled */
import { LOGIN, LOGOUT, LOADING, ERROR } from '../actions/sessionActions'

export default (state = initialState, action) => {

  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true,
        loading: false
      }
    case LOGOUT:
      localStorage.removeItem("token")
      return {...initialState, loading: false}
    case LOADING:
      return {...state, loading: true}
    case ERROR:
      return {...state, error: true}
    default:
      return state;
    }
  }
  /*=================================================
    END REDUCER EXAMPLE
  =================================================*/


/************************************************
  COMBINE REDUCERS => ./reducer/index.js
************************************************/
/* To avoid have one crazy huge switch statement that handles all actions and events -
creating multiple reducers, dividing responsibity among them, and combining them into one
'rootReducer' is best practice. */
import { combineReducers } from 'redux';
import sessionsReducer from './sessionsReducer';
import aSecondReducer from './aSecondReducer';

export default combineReducers({
  sessionsReducer,
  aSecondReducer
});
// NOTE: 'rootReducer' is imported in the create store example and included in the global store.
/*=================================================
End combine reducers example
=================================================*/


/************************************************
 'sessionActions' EXAMPLE ===> 'src/actions/sessionActions.js'
************************************************/
export { login, LOGIN };

//ITS RECCOMENDED TO SAVE ACTION TYPE VALUES TO CONSTANTS
const LOGIN = 'LOGIN';
/* THIS LOGIN ACTION BELOW IS WHAT WILL BE DISPATCHED TO IT'S RESPECTIVE REDUCER
    -         -       -       -       -       -       -         -
   REFER TO ExampleApp WHERE 'login' AND 'loginFetch' ARE IMPORTED
   THEN 'loginFetch' IS MAPPED TO PROPS AND DISPATCHED TO 'sessionsReducer'
   WHEN LOGIN BUTTON IS CLICKED */
   const login = (email, password) => {
     return {type: LOGIN, email, password}
   }

//fetch function with async action
export const loginFetch = (credentials) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      return data;
      /*
         By returning 'data', this promise chain can be continued
         wherever this fetch is invoked. Meaning more async actions can be
         performed on this fetch outside the sessionsReducer.
         WICKED SMORT!
      */
    })
  }
}
/*================================================
END OF 'sessionActions' EXAMPLE
=================================================*/


/************************************************
ACCESSING GLOBAL STORE FROM COMPONENT EXAMPLE
************************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';

//importing async function and login action
import { loginFetch, login } from '../../actions/sessionActions'

class ExampleApp extends Component {

  handleLoginClick = () => {
    /*
    The function invocation below passes the fetch defined in the 'sessionActions'
    example to a dispatch function which then returns a LOGIN action (if the login was successful).
    That LOGIN action is then handled by the sessionsReducer. The result of that action is now an updated
    glabal state that now includes a valid current user.  ****exhales deeply***
    */
    this.props.loginFetch(login(email, password))
    .then(data => {
      if (data.status === 'successful_login'){
        localStorage.setItem("token", data.token)
        dispatch({ type: LOGIN, payload: data })
      }
    })
  }

  render(){
    return(
      <Button onClick={this.handleLoginClick}type='submit'>Login</Button>
    )
  }
}

const mapDispatchToProps = (dispatch) => {

  return {loginFetch: (credentials) => dispatch(loginFetch(credentials))}
}

//state is automatically passed into 'mapStateToProps' as argument thru connect
const mapStateToProps = (state) => {
  return {currentUserId: state.sessionsReducer.currentUser.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleApp)
/*================================================
ACCESSING GLOBAL STORE FROM COMPONENT EXAMPLE
=================================================*/

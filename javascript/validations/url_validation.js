// npm install --save 'validate.jsß'

const validateUrl = (myUrl) => {
    const validate = require("validate.js");
    const isValid = validate({website: myUrl}, {website: {url: true}})
    //Valid url's return undefined
    return !isValid ? true : false
}

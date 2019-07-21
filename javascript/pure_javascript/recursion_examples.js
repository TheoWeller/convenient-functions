//RECURSIVE FUNCTIONS

//Reverse String
function reverseString(str){
	if (str === '') return '';
return reverseString(str.substr(1)) + str[0];
}
/*===========================================*/

/* Factorial example.
source: https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea */
function factorial(x) {
  // TERMINATION
  if (x < 0) return;
  // BASE
  if (x === 0) return 1;
  // RECURSION
  return x * factorial(x - 1);
}
factorial(3);
// 6
/*===========================================*/

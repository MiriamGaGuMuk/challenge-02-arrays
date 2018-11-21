/**
* Define the 'numAverage' function that receives a series of 
* strings as an argument and gets from each series the average 
* of the two numbers that make up the series. 
**/


// ++ Write YOUR CODE Below



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------Output-------------------------*/

var listFirst = ['001-12.43-56.78', '002-23.63-45.98', '003-78.63-16.28']
var listSecond = ['010-45.45-23.11']

var resultFirst = numAverage(listFirst);
var resultSecond = numAverage(listSecond);


/*-------------------TEST-1-------------------------*/

console.log("==== ex-01-numberInString : TEST 1 ====");

console.assert(resultFirst[0] === "001-69.21");
console.assert(resultFirst[1] === "002-69.61");
console.assert(resultFirst[2] === "003-94.91");

/*-------------------TEST-2-------------------------*/

console.log("==== ex-01-numberInString : TEST 2 ====");

console.assert(resultSecond[0] === "010-68.56");



/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');

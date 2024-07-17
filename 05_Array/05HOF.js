/*
    array is also a custom objcts in js
    index of the element is key and the element is value
    ["abc", "def", "ghi"] -> {0:"abc", 1:"def", 2:"ghi"}
*/

/*
map function
map is a higher order function available with arrays
it takes a function as an argument
it returns an array in which every value is actually populated by calling.... 
.....function with original array element as argument

map internally iterate over every element of the given original array pass that element..... 
......in the argument function and then store the returned value inside an array.

*/

function square(num) {
    return num * num
}

const arr = [1,2,3,4,5];

const result = arr.map(square);
console.log(result);

/**
 * When to use map
 * In any situation when we have to do an operation on every element of the array 
 * and store the result of each operation
 * e.g. array of product objects
 * 
*/



const newArr = [9,8,7,6,5];

/*
if the function that we are passing in the map takes two arguments
then first argument will be accessing the actual value 
second argument wil be accessing index of that value.
*/

function print(element, idx) {
    return `Element at index ${idx} is ${element}`
}

const result2 = newArr.map(print)
console.log(result2);



// custom mapper function

function customMapper(arr, func) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i));
    } 
    return result;
}

const value = customMapper(newArr, print);
console.log(value);


/**
 * Filter Function
 * Filter is also a higher order function
 * loop over the array element
 * the argument function which we have to pass inside filter should always return a boolean, 
 * otherwise output will be converted to a boolean 
 */

function oddOrEven(x) {
    return (x % 2 == 0);
}

let arr1 = [1,2,3,4,5,6,7,8,9];

const result1 = arr1.filter(oddOrEven);

console.log(result1);


/**
 * reduce is a hof for arrays
 * it one by one goes to every element of the array
 * say the current element is arr[i]
 * reduce will pass this element to the function, and accumulate the result of further function calls
 * with this particular result
 */

const arr2 = [1,2,3,4,5,6];

function sum(prevResult, currValue) {
    return prevResult + currValue;
}

const result3 = arr2.reduce(sum);
console.log(result3);




function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);
    let newPrice = prevResult.price + currValue.price;
    return {price: newPrice};
}

let cart = [{price:10000, name:"Iphone"}, {price:500, name:"backcover"}, {price:300, name:"tempered glas"}];
const totalPrice = cart.reduce(addPrices);
console.log(totalPrice, totalPrice.price);
// Array in javaScript stores collection of strings, characters, numbers, objects, etc.
// it supports hetrogenous value

let x = [];
let y = [1,2,3,false,"vivek",NaN,null,undefined]

console.log(x);
console.log(y);


// accessed or Read element randomly using an index, operation takes O(1) time.

console.log(y[2]);
console.log(y[4]);

// Update element, arrays are mutable

y[0] = 5;

console.log(y);

// Insertion
// Inserting at the beginning of the array

// The unshift() method adds one or more elements to the beginning of an array and returns its new length.
// O(n)

const array = [2, 5, 1];
array.unshift(0); // ↪️ 4
console.log(array); // [ 0, 2, 5, 1 ]
array.unshift(-2, -1); // ↪️ 6
console.log(array); // [ -2, -1, 0, 2, 5, 1 ]


// Inserting at the middle of the array
// The splice() method changes an array’s contents by removing existing elements or adding new items. 
// Splice returns an array containing the deleted items.
// O(n).

const array = [2, 5, 1, 9, 6, 7];
array.splice(1, 0, 111); // ↪️ [] (1)
// array: [2, 111, 5, 1, 9, 6, 7]
// at position 1, delete 0 elements and insert 111.



// Inserting at the end of the array
// The push() method adds one or more elements to the end of an array and returns its new length.
// O(1).

const array = [2, 5, 1, 9, 6, 7];
array.push(4); // ↪️ 7 (1)
// array: [2, 5, 1, 9, 6, 7, 4]



// Searching by value can be done using indexOf.
// If the value is there, we will get the index, otherwise -1.

const array = [2, 5, 1, 9, 6, 7];
console.log(array.indexOf(9)); // ↪️ 3
console.log(array.indexOf(90)); // ↪️ -1

// indexOf has to loop through the whole array (worst case) or until we find the first occurrence. 
// Time complexity is O(n).


// Deletion
// Deleting element from the beginning

// The shift() method shift all elements to the left. 
// In turn, it removes the first element from an array and returns that removed element. 
// This method changes the length of the array.
// Runtime: O(n).

const array = [2, 111, 5, 1, 9, 6, 7];

array.shift(); // ↪️ 2
array.shift(); // ↪️ 111
console.log(array); // [5, 1, 9, 6, 7]

// We can also use splice

array.splice(0, 1); // ↪️ [ 5 ]
console.log(array); // [ 1, 9, 6, 7 ]



// Deleting element from the middle
// use splice

const array = [0, 1, 2, 3, 4];

array.splice(2, 3); // ↪️ [ 2, 3, 4 ] (1)
console.log(array); // [0, 1]



// Deleting element from the end
// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array.
// Runtime: O(1).

const array = [2, 5, 1, 9, 111];
array.pop();  // ↪️111
// array: [2, 5, 1, 9]
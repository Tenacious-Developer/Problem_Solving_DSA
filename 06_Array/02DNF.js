// The Dutch National Flag Algorithm is a sorting algorithm developed by Edsger Dijkstra. 
// It is designed to solve problems where an array needs to be sorted into three distinct groups or partitions based on a specific condition.

//The name originates from the Dutch flag, which has three colors: red, white, and blue.


function swap(arr,i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function seprate(arr) {
    let i = 0;
    let j = arr.length - 1;

    while(i <= j) {
        if(arr[i] == 1) {
            swap(arr,i,j);
            console.log(arr);
            j--;
        } else {
            i++
        }
    }
}

let arr = [1,1,1,0,1,0,0,0,1,0];
seprate(arr);
console.log(arr);






function dutchNationalFlag(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap arr[mid] and arr[low]
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            // Move mid forward
            mid++;
        } else { // arr[mid] === 2
            // Swap arr[mid] and arr[high]
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

// Example usage:
let arr = [2, 0, 2, 1, 1, 0];
console.log(dutchNationalFlag(arr)); // Output: [0, 0, 1, 1, 2, 2]
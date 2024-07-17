var merge = function(nums1, m, nums2, n) {

    let result = Array(m + n).fill(0);

    let i = 0; // iterate on nums1
    let j = 0; // iterate on nums2
    let k = 0; // iterate on result

    while(i < m && j < n) {
        if(nums1[i] < nums2[j]) {
            result[k] = nums1[i];
            i++;
            k++;
        }else {
            result[k] = nums2[j];
            j++;
            k++;
        }
    }
    // the above while loop will end when any one array exhausted
    while(i < m){
        result[k] = nums1[i];
        i++;
        k++;
    }

    while(j < n){
        result[k] = nums2[j];
        j++;
        k++;
    }

    // beacuse the questions demands
    // for(let i = 0; i < result.length; i++){
    //     nums1[i] =result[i];
    // }

    return result;

};

let nums1 = [1,2,3]; 
let m = 3; 
let nums2 = [2,5,6];
let n = 3;

let mergeArray = merge(nums1,m,nums2,n);
console.log(mergeArray);
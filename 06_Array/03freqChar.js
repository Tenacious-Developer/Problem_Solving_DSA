let str = "javascript";
let freqMap = {};

for(const char of str) {
    // if you are using char as a variable then don't use freqMap.char, use freqMap[char]
    if(freqMap[char]) {
        freqMap[char] += 1; 
    } else {
        freqMap[char] = 1;
    }
}

console.log(freqMap);



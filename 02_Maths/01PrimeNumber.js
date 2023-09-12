// Function Declaration
function findPrime(num){
	for(let i = 2; i <= num-1; i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}

let res = findPrime(13);
console.log(res);


// Function Expression
const prime = function findPrime(num) {
	for(let i = 2; i <= num-1; i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}


let res = prime(13);
console.log(res);

// Arrow Function
const prime = (num) => {
	for(let i = 2; i <= num-1; i++) {
		if(num % i === 0) {
			return false;
		}
	}
	return true;
}

let res = prime(13);
console.log(res);
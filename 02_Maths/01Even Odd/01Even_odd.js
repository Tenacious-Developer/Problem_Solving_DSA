function isEvenOrOdd(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0) {
			console.log("Even", i);
		}
		else {
			console.log("Odd", i);
		}
	}
}

let result = isEvenOrOdd(10);
console.log(result);
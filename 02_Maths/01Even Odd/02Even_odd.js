function isEvenOrOdd(num) {
	if (num % 2 === 0) {
		return "Even";
	}
	else {
		return "Odd";
	}
}

for (let i = 1; i <= 10; i++) {
	let result = isEvenOrOdd(i);
	console.log(i, "is", result);
}
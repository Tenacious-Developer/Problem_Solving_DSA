const prime = (num1, num2) => {
	for (let num = num1; num <= num2; num++) {
		let isPrime = true;
		
		for (let i = 2; i <= num - 1; i++) {
			if (num % i === 0) {
					isPrime = false;
					break;
			}
		}
		
		if (isPrime) {
			console.log(num, "Prime Number");
		} else {
			console.log(num, "Not a Prime Number");
		}
	}
}

prime(2, 13);



// const prime = (num1, num2) => {
//     for (let num = num1; num <= num2; num++) {
//         let isPrime = true;
//         // Using num / 2 as the upper limit optimizes the prime checking process by avoiding unnecessary calculations, making the algorithm more efficient.
//         for (let i = 2; i <= num / 2; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break; // Exit the loop early if a factor is found
//             }
//         }
        
//         if (isPrime) {
//             console.log(num, "Prime Number");
//         } else {
//             console.log(num, "Not a Prime Number");
//         }
//     }
// }

// prime(2, 13);
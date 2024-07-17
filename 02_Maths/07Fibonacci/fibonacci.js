function fibonacciNumber(num) {

    if(num === 0) {
        console.log(0);
        return;
    }

    if(num >= 1) {
        console.log(0);
        console.log(1);
    }

    let a = 0;
    let b = 1;

    for(let i = 2; i <= num; i++) {
        let res = a+b;
        console.log(res);
        a = b;
        b = res;
    }

}

fibonacciNumber(5);
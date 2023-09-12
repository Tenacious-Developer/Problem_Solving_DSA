function pattern(n) {
    for(let row = 1; row <= n; row++) {
        let str = "";
        for(let col = 1; col <=n; col++) {
            str += "*"; 
        }
        console.log(str);
    }
}

pattern(4);
pattern(5);
pattern(6);


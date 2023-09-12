function pattern(n) {
    for(let row = 1; row <= n; row++) {
        let str = "";
    
        // let stars = n-row+1;

        let stars = n-(row - 1);
        for(let col1 = 1; col1 <= stars; col1++) {
            str += "*"; 
        }

        console.log(str);
    }
}

pattern(4);
pattern(5);
pattern(6);
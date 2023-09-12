function pattern(n) {
    for(let row = 1; row <= n; row++) {
        let str = "";
        let spaces = n - row;
        for(let col1 = 1; col1 <= spaces; col1++) {
            str += " "; 
        }
        
        let stars = 2*row - 1;
        for(let col2 = 1; col2 <=stars; col2++) {
            str += "*"; 
        }

        console.log(str);
    }
}

pattern(4);
pattern(5);
pattern(6);
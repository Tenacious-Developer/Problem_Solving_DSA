function pattern(n) {
    for(let row1 = 1; row1 <= n; row1++) {
        let str1 = "";
        let spaces1 = n - row1;
        for(let col1 = 1; col1 <= spaces1; col1++) {
            str1 += " "; 
        }
        
        let stars1 = 2*row1 - 1;
        for(let col2 = 1; col2 <=stars1; col2++) {
            str1 += "*"; 
        }

        console.log(str1);
    }

    for(let row2 = 1; row2 <= (n - 1); row2++) {
        let str2 = "";
        let spaces2 = row2;
        for(let col1 = 1; col1 <= spaces2; col1++) {
            str2 += " "; 
        }
        
        let stars1 = 2*(n - row2) - 1;
        for(let col2 = 1; col2 <=stars1; col2++) {
            str2 += "*"; 
        }

        console.log(str2);
    }


}


//pattern(5);
pattern(7);
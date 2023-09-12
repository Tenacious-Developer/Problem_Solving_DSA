function upper(n) {
    for(let row1 = 1; row1 <= (n -1)/2; row1++) {
        let str1 = "";
        
        for(let col1 = 1; col1 <= row1; col1++) {
            str1 += "*"; 
        }
        
        let spaces1 = n - 2*row1;
        for(let col2 = 1; col2 <=spaces1; col2++) {
            str1 += " "; 
        }

        for(let col1 = 1; col1 <= row1; col1++) {
            str1 += "*"; 
        }

        console.log(str1);
    }

}

function middle(n) {

    let str1 = "";
        
    for(let col1 = 1; col1 <= n; col1++) {
        str1 += "*"; 
    }

    console.log(str1);

}

function lower(n) {
    for(let row1 = 1; row1 <= (n -1)/2; row1++) {
        let str1 = "";
        
        for(let col1 = 1; col1 <= ((n -1)/2) - row1 + 1; col1++) {
            str1 += "*"; 
        }
        
        let spaces1 = 2*row1 - 1;
        for(let col2 = 1; col2 <=spaces1; col2++) {
            str1 += " "; 
        }

        for(let col1 = 1; col1 <= ((n -1)/2) - row1 + 1; col1++) {
            str1 += "*"; 
        }

        console.log(str1);
    }

}


upper(7);
middle(7);
lower(7);
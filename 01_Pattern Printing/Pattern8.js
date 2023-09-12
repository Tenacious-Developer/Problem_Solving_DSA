function pattern(n) {

    for(let row = 1; row <=n; row++) {

        let str = "";
        let spaces = n - row;
        for(let col1 = 1; col1 <= spaces; col1++) {
            str += " ";
            
        }

        let counter = 1;
        for(let col2 = 1; col2 <= row; col2++) {
            str += counter;
            counter++;
            
        }

        let counter2 = row - 1;
        for(let col3 = 1; col3 <= row - 1; col3++) {
            str += counter2;
            counter2--; 
        }

        console.log(str);
    }

}

pattern(5);
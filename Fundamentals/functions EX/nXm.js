function nxn(num) {
       
        
       let rowGenerator = () => {
        let toPrint = [];
        for(let m = 1; m <= num; m++){
            toPrint.push(num);
        }
        return toPrint.join(" ");
       }
        for(let n = 1; n <= num; n++){
            console.log(rowGenerator());
        }
  
  
//     let matrix = [];
//     for(let n = 0; n < num; n++){

//         let row = [];

//         for(let m = 0; m < num; m++){
//             row.push(num);
//         }
//         matrix.push(row.join(" "));
//     }
//    console.log(matrix.join("\n"));
    


    // for(let i = 0; i < num; i++){

    //     console.log(num.toString().repeat(num).split("").join(" "));
    // }



    
}nxn(7) 
function fizzBuzz1(){
    for(i = 1; i <= 100; i++) {
        
        let res = ""
        
        if (i % 3 == 0) { res += "Fizz" }
        if (i % 5 == 0) { res += "Buzz" }

        if (res == "") { res = i }

        console.log(res)
    }
}

/*--------------------------------------------------------------*/

// dataset = [
//     {
//         number: 3,
//         word: "Fizz"
//     },
//     {
//         number: 5,
//         word: "Buzz"
//     },

// ];

// function fizzBuzz2(){
//     for(i = 1; i <= 100; i++) {
//         let output = ""

//         dataset.forEach(e => 
//             { if (i % e.number == 0) { output += e.word } });

//         if (output == "") { output = i}
//         console.log(output)
//     }
// }

fizzBuzz1();
//fizzBuzz2();


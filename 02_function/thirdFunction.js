// const sayhii = function(){
//     console.log('hi');
    
// }
// sayhii();

// IIFE : imediately invoked function expression
// (
//     function(){
//         console.log('hi');
        
//     }
// )()


// function addNumbers(a,b){
//     return a+b
// }
// console.log(addNumbers(1,2));
// console.log(addNumbers(4,5));


// let count = 0;

// function counter(){
//     count++
//     return count 
// }


// // console.log(count);

// const sumOFTwoNumbers = (a,b) =>(a+b)

// console.log(sumOFTwoNumbers(2,3));

// function printResult(result){
//     console.log(`the result is ${result}`);
    
// }

// function add(a,b) {return a + b};
// function subtract(a,b) {return a-b}
// function multiply(a,b) {return a*b}

// function calculate(operation , a,b, callback){
//     let result;

//     if(operation == 'abd'){
//         result = add(a,b)
//     }else if(operation == 'sub'){   
//         result = subtract(a,b)
//     }else if(operation == 'mul'){
//         result = multiply(a,b)
//     }else{
//         console.log("Invalid operation");
//         return
        
//     }
//     callback(result)
// }

// calculate('abd', 2, 3, printResult)

// function calculate (a,b ){
//     const result = a+b;
//     return function(){
//         console.log(`The output is ${result}`);        
//     }
// }

// calculate(2,3)()

// function addThreeNumbers(a, b, c){
//     return a+b+c
// }

// console.log(addThreeNumbers(1,2,3));


// function addThreeNumbers(a){
//     return function(b){
//         return function(c){
//             return a+ b + c
//         }
//     }
// }

// console.log(addThreeNumbers(1)(2)(3));

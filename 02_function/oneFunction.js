// console.log('hello Adarsh');
// console.log('hello Abhay');
// console.log('hello Guddu');
// console.log('hello world');

// function sayhi(){
//     console.log('Hello all');                                               
//     console.log("it's been nice meeting you all");
        
// }
// sayhi()

//DRY: do not repeat yourself

// function sayhi(name){
//     console.log(`Hello, ${name}`);
    
// }
// sayhi("Mithun")
// sayhi("prabir")

// function sayhi(name = 'user'){
//     console.log(`hello, ${name}` );
    
// }
// sayhi()

// Parameter: Accept; Argument: Pass

// function addNumbers(){
//     console.log(arguments);    
// }

// addNumbers(1,2)
// addNumbers(1,2,3)

// function addNumbers(){
//     let sum = 0;
//     for(let i=0; i< arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum;
    
// }

// const result = addNumbers(1,2)
// console.log(result);

// const addtwoNumbers = (a,b) =>(
//     a+b
// )
// const result = addtwoNumbers(2,3)
// console.log(result);


// this context

// const person = {
//     name: "Mithun",
//     sayhello: function(){
//         console.log(this.name);
        
//     }
// }
// person.sayhello()
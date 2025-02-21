// it is a way in which the variable / function declared in parent's scope is avaliable for children

// function counter (){
//     let a = "Mithun"
//     return function (){
        
//         console.log(a);
        
//     }
// }


// counter()()
// counter()()
// counter()()

function counter (){
    let count = 0;
    return function(){
        count++
        console.log(count);
        
    }
}

const counterFn = counter()

counterFn()
counterFn()
counterFn()
//  Global scope

const a = 'Mithun'
console.log(a);

//  function scope

function sayhi(){
    console.log(a);
     
}
sayhi()

// Block Scope
{
    console.log(a);    
}

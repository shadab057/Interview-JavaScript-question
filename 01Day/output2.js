// var 
// function scope
// function myfunction() {
//     if(true){
//         var a = 12;
//     }
//     console.log(a);
// }

// myfunction();      // Variables declared with var are scoped to the nearest function, not to blocks like if or for. If declared outside a function, they become global.


// let 
// block scope

// function myfunction1(){
//     if(true){
//         let a = 12;
//     }
//     console.log(a);  // Error: 'a' is not accessible here
// }

// myfunction1();     // variable declared with let are scoped to the nearest bracked .


// const  
// block scope 

function myfunction3(){
    if(true){
        const a = 12;
    }
    console.log(a);       /// if only need a within the if block, move the console.lg inside.   // Can't change value after declared with const.

}

myfunction3();
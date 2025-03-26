// Hoisting 


myfunction();  // Output : 12

function myfunction() {
    if(true){
        var a = 12;
    }
    console.log(a);
}
 

// Hoisting refers to the process where by the interpreter appears to move the diclarations to the top of the code before execution.
// Variables can thus be referenced before they are declared in JavaScript.
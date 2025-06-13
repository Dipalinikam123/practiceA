// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // to end this function execution status need write semicolon otherwise it through error

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

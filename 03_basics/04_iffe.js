// Immediately Invoked Function Expression (IIFE)

(function coffee (){
    //named IIFE
    console.log('DB CONNECTED');

})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('mukul')
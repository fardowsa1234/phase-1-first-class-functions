

// Define a function called returnsANamedFunction that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // Function body
    };
}

// Define a function called returnsAnAnonymousFunction that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // Function body
    };
}
// Define a function called receivesAFunction that takes a callback function as an argument
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// Example callback function
function myCallback() {
    console.log("Callback function called");
}

// Call receivesAFunction with myCallback as the argument
receivesAFunction(myCallback);

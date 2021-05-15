// Recursion = where a function calls itself

/* works by defining a base case that the function can return an
answer for, and then saying the general case can be provided in
terms of a more simple case, such that eventually we reduce to
the base case. */


//factorial

const factorial = function (n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

//factorial using ternary expression
// (condition) ? (do this if true) : (do this if false)
const factorial_v2 = (n) => n === 0 ? 1 : n * factorial_v2(n - 1);



//fibonacci

const fibonacci = function (n) {
    if (n === 0) {
        return 0;
    } if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

//fibonacci using ternary expression
const fibonacci_v2 = (n) => (n < 2)
    ? n
    : fibonacci_v2(n - 1) + fibonacci_v2(n - 2);



//lucas
//i.e. same as fibonacci but diff base cases

const lucas = function (n) {
    if (n === 0) {
        return 2;
    } if (n === 1) {
        return 1;
    } else {
        return lucas(n - 1) + lucas(n - 2);
    }
};

//lucas using ternary expression
const lucas_v2 = (n) => (n === 0)
    ? 2
    : n===1
    ? 1
    : lucas_v2(n-1) + lucas_v2(n-2);



//fibonacci-like function
//i.e. currying the fibonacci sequence

const brady = (b0, b1, n) => (n===0)
    //brady takes two base cases and n
    //it does the fibonacci sequence in terms of b0,b1,n
    ? b0
    : n===1
    ? b1
    : brady(b0,b1,n-1) + brady(b0,b1,n-2);

const fibonacci_like = (b0, b1) => (n) => brady(b0,b1,n);
//fibonnaci_like does the same but in a different way
//i.e. fibonnacci_like(2,1)(10) = 123

const b = fibonacci_like(2308,4261);

debugger;

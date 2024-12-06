// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:

// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)

// n = 0
// m = 1
// result - division by zero (refer to the specifications o

/**
 * @param {Number} n
 * @param {Number} m
 * @return {Number}
 * @example
 * n=17 m=4 remainder(17,4) ==> return 1
 */
function remainder(n, m) {
   /**
    * utilize the modulolus operator
    * check which int in greater and perform appropriate permutation
    * return the value of the operation
    */
   if (n > m) return n % m;
   return m % n;
}

console.log(remainder(17, 8));

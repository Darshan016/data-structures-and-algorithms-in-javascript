function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false;
        }
        n=n/2;
    }
    return true;
}

//optimized solution
// here we used the bitwise comparison to check for the reminder of the number divided by 2.
function isPowerOfTwo(n){
    if(n<1){
        return false;
    }
    return (n&(n-1))===0
}
console.log(isPowerOfTwo(12))
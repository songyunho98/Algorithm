/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let MinNum = -2147483648; //-2^31 값
    let MaxNum = 2147483647;  //2^31-1 값
    let result;
    
    result = x.toString().split("").reverse().reduce((acc, cur) => {
        if( cur === "-") {
            return acc *= -1;
        } else {
            return Number(acc + cur);
        }
        
    }); 
    
    if(result < MinNum || result > MaxNum) {
        return 0;
    }
    
    return result;
};
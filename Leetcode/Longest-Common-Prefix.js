/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result = '';
    if(strs.length < 1) return result;
    const first = strs[0]; 
    for(let i = 0; i < first.length ; i++){
        const c = first[i];  
        
        for(let j = 1;j < strs.length; j++){
            if(strs[j][i] !== c) return result; 
        }
        result += c;
    }
    return result;
};
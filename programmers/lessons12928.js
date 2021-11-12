// 약수의 합

function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

//test
console.log(solution(12)); //28
console.log(solution(5)); //6
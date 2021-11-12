//두 개 뽑아서 더하기

function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let sum =  numbers[i] + numbers[j];
            if( answer.indexOf(sum) === -1) {
          answer.push(sum);
            }
        }
    }
    answer.sort((a, b) => a - b);
    return answer;
}

//test
console.log(solution([2, 1, 3, 4, 1])); //[2, 3, 4, 5, 6, 7]
console.log(solution([5, 0, 2, 7])); //[2, 5, 7, 9, 12]
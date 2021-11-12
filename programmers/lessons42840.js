//모의고사

function solution(answers) {
    var answer = [];
    var supoja1 = [1, 2, 3, 4, 5];
    var supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const result = [0, 0, 0];

    for(let i = 0; i < answers.length; i++) {
        if(answers[i] === supoja1[i % 5]) {
            result[0]++;
        }
        if(answers[i] === supoja2[i % 8]) {
            result[1]++;
        }
        if(answers[i] === supoja3[i % 10]) {
            result[2]++;
        }
    }
    const maxResult = Math.max(...result);
    if(maxResult === result[0]) {
        answer.push(1);
    }
    if(maxResult === result[1]) {
        answer.push(2);
    }
    if(maxResult === result[2]) {
        answer.push(3);
    }
    answer.sort((a, b) => a - b);
    return answer;
}

//test
console.log(solution([1, 2, 3, 4, 5])) //[1]
console.log(solution([1, 3, 2, 4, 2])) //[1, 2, 3]
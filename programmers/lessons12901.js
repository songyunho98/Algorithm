// 2016년

function solution(a, b) {
    var answer = '';
    let monthEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var sum = 0;
   
    for(let i = 1; i < a; i++) {
        sum += monthEnd[i - 1];
    }
    
    sum += b - 1;
    answer = day[sum % 7]; 
    return answer;
}

//test
console.log(solution(5, 24)); //"TUE"
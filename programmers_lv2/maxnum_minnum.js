// https://programmers.co.kr/learn/courses/30/lessons/12939
// lv2 최대값과 최솟값

const s = "-1 -2 -3 -4";

// result = "-4 -1";

function solution(s) {
    let answer = '';
    let temp = s.split(" ");
    temp.sort((a,b) => {
       return Number(b) - Number(a);
    });
    answer = String(temp[temp.length - 1]) + " " + String(temp[0]);
    
    return answer;
}

console.log(solution(s));


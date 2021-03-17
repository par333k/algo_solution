// https://programmers.co.kr/learn/courses/30/lessons/12937
// lv1 짝수와 홀수

const num = 3;
// result = "Odd"
function solution(num) {
    let answer = '';

    if(num%2 == 0) {
        answer = "Even";
    } else if(num%2 != 0) {
        answer = "Odd"
    }

    if(num == 0) {
        answer = "Even"
    }

    return answer;
}

console.log(solution(num));
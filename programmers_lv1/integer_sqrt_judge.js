// https://programmers.co.kr/learn/courses/30/lessons/12934
// lv1  정수 제곱근 판별

const n = 121;

// result = 144;
function solution(n) {
    let answer = 0;

    if(Number.isInteger(Math.sqrt(n))) {
        let temp = Math.sqrt(n);
        temp = temp + 1;
        answer = temp * temp;
    } else {
        answer = -1;
    }

    return answer;
}

console.log(solution(n));
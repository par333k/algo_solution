// https://programmers.co.kr/learn/courses/30/lessons/12899?language=javascript
// lv2 124 나라의 숫자

const n = 4;

// result = 11;
function solution(n) {
    let answer = '';
    let threehex = ["4", "1", "2"];
    while(n > 0) {
        answer = threehex[n % 3] + answer;
        n = parseInt((n - 1) / 3);
    }
    return answer;
}

console.log(solution(n));

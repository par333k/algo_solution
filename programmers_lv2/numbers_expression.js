// https://programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
// lv2 숫자의 표현

const n = 15;
// result = 4
function solution(n) {
    let answer = 0;
    let sum = 0;
    let count = 1;
    while(count <= n) {
        sum = 0;
        for (let i = count; i <= n; i++) {
            let temp = (sum += i);
            if(temp === n) {
                answer += 1;
                break;
            } else if(temp > n) {
                break;
            }
        }
        count++;
    }
    return answer;
}

console.log(solution(n));
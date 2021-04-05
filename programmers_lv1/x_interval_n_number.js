// https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
// lv1 x만큼 간격이 있는 n개의 숫자

const x = 4;
const n = 3;

// result = [4,8,12];
function solution(x, n) {
    let answer = [];
    let temp = 0;
    //x를 n번 더한 값을 배열에 넣으면 되네
    for (let i = 1; i <= n; i++) {
        temp = x*i
        answer.push(temp);
    }

    return answer;
}

console.log(solution(x, n));

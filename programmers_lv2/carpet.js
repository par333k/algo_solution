// https://programmers.co.kr/learn/courses/30/lessons/42842?language=javascript
// lv2 카펫 문제
// 이거 예전에는 아예 손도 못대서 멘붕했던 문제였는데 지금은 혼자 풀 수가 있게 되었다.
// 사람이 늘긴 느는구나...

const brown = 50;
const yellow = 22;
//result [24, 3]

function solution(brown, yellow) {
    let answer = [];
    let tempArr = [];
    let sum = brown + yellow;
    // (x-2)*(y-2) = yellow
    // brown = (x*y) - yellow
    // sum = (x*y);
    // sum/x = y
    // x가 y보다 크고, x-2 * y-2 가 yellow인 애만 x, y 추출
    // x-2 * y-2 조건은 가로 -2 세로 -2 의 곱이 카펫트의 노란 격자 넓이기 때문 이게 아니면 사각격자가 유지되지 않는다
    for(let i = 1; i <= sum; i++) {
        if(sum%i === 0) {
            tempArr.push(i);
        }
    }
    if (tempArr.length%2 === 0) {
        for(let i = 0; i < tempArr.length; i++) {
            const y = sum/tempArr[i];
            if (y > tempArr[i] && (tempArr[i]-2)*(y-2) === yellow) {
                answer.push(y);
                answer.push(tempArr[i]);
            }
        }
        return answer;
    } else {
        for(let i = 0; i < tempArr.length; i++) {
            const y = sum/tempArr[i];
            if (y === tempArr[i] && (tempArr[i]-2)*(y-2) === yellow) {
                answer.push(y);
                answer.push(tempArr[i]);
            }
        }
        return answer;
    }
}

console.log(solution(brown, yellow));
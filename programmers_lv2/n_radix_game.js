// https://programmers.co.kr/learn/courses/30/lessons/17687?language=javascript
// lv2 [3차] n진수 게임

const n = 16
const t = 16
const m = 2
const p = 2

// result = "13579BDF01234567"
function solution(n, t, m, p) {
    let answer = '';
    // n진법으로 변환한 t의 숫자들을 모아보자
    // 이 때 자릿수가 바뀌면 분리해야한다
    // 인원중 튜브의 순서를 해당 배열에서 체크해서 모으자
    let temp = [];
    let length = Number(t*m);
    for (let i = 0; i <= length; i++) {
        let nfix = i.toString(n).split('');
        temp.push(nfix);
    }

    temp = temp.flat();
    let count = 0;
    for (let i = 0; i < temp.length; i++) {
        if(answer.length === t) break;
        count++
        if(count > m) {
            count = 1;
        }

        if(count == p) {
            answer += temp[i];
        }

    }

    answer = answer.toUpperCase();
    return answer;
}

console.log(solution(n,t,m,p));
// https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
// lv1 두 정수 사이의 합

const a = 3;
const b = 5;

//result = 12;
function solution(a, b) {
    let answer = 0;
    if ( a == b ) {
        answer = a;
    }

    if (a > b) {
        //a - b 가 길이
        let length = a - b;
        let temp = [];
        temp.push(b);
        for (let i = 1; i < length; i ++) {
            temp.push(b + i);
        }
        temp.push(a);
        for (let k= 0; k < temp.length; k ++) {
            answer += temp[k];
        }

    } else if (b > a) {
        //a - b 가 길이
        let length = b - a;
        let temp = [];
        temp.push(a);
        for (let i = 1; i < length; i ++) {
            temp.push(a + i);
        }
        temp.push(b);
        for (let j= 0; j < temp.length; j ++) {
            answer += temp[j];
        }
    }

    return answer;
}

console.log(solution(a, b));
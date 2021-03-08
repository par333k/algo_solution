// https://programmers.co.kr/learn/courses/30/lessons/70128
// lv1 내적 (내적은 내부 곱셈 이라는 뜻)
// 내적 규칙은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
// n은 a와 b의 길이, a,b는 길이가 같다.

const a = [1,2,3,4];
const b = [-3,-1,0,2];

// result = 3;
function solution(a, b) {
    let answer = 1234567890;
    let numbers = [];
    for(let i = 0; i < a.length; i++) {
        const sum = a[i] * b[i];
        numbers.push(sum);
    }

    answer = numbers.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
    return answer;
}

console.log(solution(a,b));


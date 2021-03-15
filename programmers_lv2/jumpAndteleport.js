// https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript
// lv2 점프와 순간이동

const n = 5000;

// result = 5;
function solution(n) {
    let ans = 0;

    while(n>0) {
        if(n%2 === 0) {
            n = n/2;
        } else {
            ans++;
            n = n - 1;
        }
    }

    return ans;
}

console.log(solution(n));
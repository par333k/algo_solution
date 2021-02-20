// https://programmers.co.kr/learn/courses/30/lessons/68935
// lv1 삼진법 뒤집기

const n = 125;
//result = 229
function solution(n) {
    let answer = 0;
    let stack = [];
    const tostring3 = n.toString(3);
    for (let i = tostring3.length-1; i >= 0; i--) {
        stack.push(tostring3[i]);
    }
    const number = stack.join('');
    answer = Number.parseInt(number, 3);
    
    return answer;
}

console.log(solution(n));

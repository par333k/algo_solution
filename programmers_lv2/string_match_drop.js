// https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
// lv2 짝지어 제거하기

const s = "baabaa"

// result = 1
function solution(s) {
    let answer = 0;
    let stack = [];
    // 연속된 문자열이 2개일 경우 지워준다
    // 지우고 앞뒤를 붙인다
    // 반복해서 다 하고 문자가 남아있다면 0을, 없으면 1을 리턴한다
    // 효율성 탈락..
    // 첫 문자부터 스택에 넣는다
    // 스택에 같은 문자면 넣은 문자와 스택의 문자를 팝해준다
    // 스택에 다른 문자면 그냥 쌓는다
    // 스택이 비었으면 0, 있으면 1이다.
    stack.push(s[0]);
    for(let i = 1; i < s.length; i++) {
        if(stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }

    }

    if (stack.length === 0) answer = 1;

    return answer;
}

console.log(solution(s))
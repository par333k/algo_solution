// https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
// lv2 올바른 괄호
// 갯수를 매칭하고 맨 앞뒤 예외케이스 외의 엣지케이스를 못찾음.. 5, 11이 왜 안되는걸까
// 스택으로 푸니까 다 통과하긴하는데 기존거랑 어떤 부분에서 차이가 나는지 모르겠다..

const s = "(())"

// result = true;
function solution(s){
    let answer = false;
    // 올바른 괄호는 열린 괄호가 연속된 갯수만큼 닫힌괄호가 나와야함
    // 시작이 닫힌괄호거나 끝이 열린괄호면 무조건 실패
    // ( 로 시작하는지 체크
    // 시작한다면 갯수를 체크
    // 아닌게 나오면 아닌갯수를 체크
    // 다음 열린괄호가 나오면 같은지 비교
    // flag를 false에서 같으면 true로 바꿔주고
    // 한 번이라도 false가 나면 브레이크하고 리턴

    let stack = [];


    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return answer;
            } else {
                if (stack.pop() !== '(') {
                    return answer;
                }
            }
        }
    }

    if(stack.length === 0) {
        answer = true;
    }

    return answer;
}

console.log(solution(s));
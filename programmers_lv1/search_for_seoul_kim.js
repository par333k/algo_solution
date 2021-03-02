// https://programmers.co.kr/learn/courses/30/lessons/12919
// lv1 서울에서 김서방 찾기

const seoul = ["Jane", "Kim"];

// result = "김서방은 1에 있다"
function solution(seoul) {
    let answer = '';
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === "Kim") {
            answer = "김서방은 "+i+"에 있다"
            break;
        }
    }
    return answer;
}

console.log(solution(seoul));
// https://programmers.co.kr/learn/courses/30/lessons/12932
// lv1 자연수 뒤집어 배열로 만들기

const n = 12345;
// result = [5,4,3,2,1]
function solution(n) {
    let answer = [];
    //문자열로 치환해서 pop/push로 새 배열하나만들까?
    let arr = [];
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        arr.push(n[i]);
    }

    for (let j = arr.length -1; j >= 0; j--) {
        let temp = arr.pop();
        temp = Number(temp);
        answer.push(temp);
    }

    return answer;
}

console.log(solution(n));
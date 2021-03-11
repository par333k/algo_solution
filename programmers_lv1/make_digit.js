// https://programmers.co.kr/learn/courses/30/lessons/12931
// lv1 자릿수 만들기

function solution(n) {
    let answer = 0;
    n = n.toString();

    for (let i = 0; i < n.length; i++) {
        answer += Number(n[i]);
    }

    return answer;
}
// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

// 신규 아이디 추천 문제, 단계별 조건을 정규식으로 체이닝. 정규표현식 연습! 엄청 편함!

function solution(new_id) {
    let reg = /[^\w-_.]/g;
    let answer = new_id
        .toLowerCase()
        .replace(reg, "")
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    if (answer.length < 3) {
        answer = answer.padEnd(3, answer[answer.length -1]);
    }

    return answer;
}
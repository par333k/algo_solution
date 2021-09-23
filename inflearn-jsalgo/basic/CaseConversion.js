/*
 * 대소문자 변환
 * 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로
 * 소문자는 대문자로 변환하여 출력하는 프로그램 작성
 */

function solution(s){
    let answer="";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i].toUpperCase()) {
            answer += s[i].toLowerCase()
        } else {
            answer += s[i].toUpperCase()
        }
    }
    return answer;
}

console.log(solution("StuDY"));

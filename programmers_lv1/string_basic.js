// https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
// lv1 문자열 다루기 기본

const s = "a234";

//result = false;
function solution(s) {
    let answer = true;
    if(s.length == 4 || s.length == 6) {
        for(let i = 0; i < s.length; i++) {
           if(s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57 ) {//0~9 10진수 아스키코드 48~57사이
               answer = false;
           }
        }
    }  else {// 길이가 4, 6이 아닐떄 false??
        answer = false;
    }
    
    return answer;
}

console.log(solution(s));
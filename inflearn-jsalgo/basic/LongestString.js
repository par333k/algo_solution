/*
 * 가장 긴 문자열
 * N 개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성
 */

function solution(s){
    let answer="", max=Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < str.length; i ++) {
        if(str[i].length > max) {
            max = str[i].length;
            answer = str[i];
        }
    }
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

/*
 * 문자 찾기
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아
 * 해당 특정 문자가 몇 개 존재하는지 알아내시오
 */

// 반복문 사용
function solution(s, t){
    let answer=0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === t) {
            answer++;
        }
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

// 내장 메서드 사용
function solution2(s, t){
    let answer;
    answer = s.split(t).length - 1;
    return answer;
}

console.log(solution2(str, 'R'));

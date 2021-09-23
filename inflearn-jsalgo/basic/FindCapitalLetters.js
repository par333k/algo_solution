/*
 * 대문자 찾기
 * 알파벳 대문자가 문자열 내에 몇 개인지 출력하라.
 */

function solution(s){
    let answer=0;
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < alpha.length; i++) {
        if(s.includes(alpha[i])) {
            answer++;
        }
    }
    return answer;
}

function solution2(s){
    let answer=0;
    for(let x of s){
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if(x===x.toUpperCase()) answer++;
    }

    return answer;
}

let str="KoreaTimeGood";
console.log(solution(str));
console.log(solution2(str));

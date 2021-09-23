/*
 * 대문자로 통일
 * 대문자와 소문자가 같이 존재하는 문자열을
 * 대문자로 모두 통일시켜 출력하시오
 */

function solution(s){
    let answer="";
    for(let i = 0; i < s.length; i++) {
        answer += s[i].toUpperCase();
    }
    return answer;

}

function solution2(s){
    let answer="";
    for(let x of s){
        let num=x.charCodeAt();
        if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
        else answer+=x;

        //if(x===x.toLowerCase()) answer+=x.toUpperCase();
        //else answer+=x;
    }

    return answer;

}

let str="ItisTimeToStudy";
console.log(solution(str));
console.log(solution2(str));

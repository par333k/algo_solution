// https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
// lv1 문자열 내 p와 y의 개수

const s = "Pyy";

// result = false;
function solution(s){
    let answer = true;
    let pcount = 0;
    let ycount = 0;
    for (let i = 0; i < s.length; i++) {
        if(s[i] == 'p' || s[i] == 'P') {
            pcount++;
        }

        if(s[i] == 'y' || s[i] == 'Y') {
            ycount++;
        }

    }
    if (pcount != ycount) {
        answer = false;
    }

    return answer;
}

console.log(solution(s));

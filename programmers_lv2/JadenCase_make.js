// https://programmers.co.kr/learn/courses/30/lessons/12951
// lv2 jadencase 문자열 만들기

const s = "3people unFollowed me";

// result = "3people Unfollowed Me";
function solution(s) {
    let answer = '';
    s = s.split(" ");


    for(let i = 0; i < s.length; i++) {
        s[i] = s[i].toLowerCase();
        let pattern_eng = /[a-zA-Z]/;	// 문자
        if (pattern_eng.test(s[i][0])) {
            let upperChar = s[i].charAt(0).toUpperCase();
            s[i] = upperChar + s[i].slice(1);
        }
    }

    s = s.join(' ');
    return s;
}

console.log(solution(s));
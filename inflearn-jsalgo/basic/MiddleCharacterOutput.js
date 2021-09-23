/*
 * 가운데 문자 출력
 * 소문자로 된 단어가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램
 * 짝수일 경우 가운데 2개의 문자를 출력
 */

function solution(s){
    let answer;
    if(s.length%2 === 0) {
        let idx = s.length/2;
        answer = s[idx-1]+s[idx];
    } else {
        answer = s[Math.floor(s.length/2)];
    }
    return answer;
}

function solution2(s){
    let answer;
    let mid=Math.floor(s.length/2)
    if(s.length%2===1) answer=s.substring(mid, mid+1);
    else answer=s.substring(mid-1, mid+1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
}
console.log(solution("good"));
console.log(solution2("study"));

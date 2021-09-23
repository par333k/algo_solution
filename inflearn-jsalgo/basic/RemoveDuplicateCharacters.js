/*
 * 중복문자제거
 * 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램 작성
 * 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지
 */
function solution(s){
    let answer="";
    let arr = s.split("");
    const duplicated = new Set(arr);
    answer = [...duplicated].join("")
    return answer;
}

function solution2(s){
    let answer="";
    //console.log(s.indexOf("K"));
    for(let i=0; i<s.length; i++){
        //console.log(s[i], i, s.indexOf(s[i]));
        if(s.indexOf(s[i])===i) answer+=s[i];
    }
    return answer;
}
console.log(solution("ksekkset"));
console.log(solution2("ksekkset"));

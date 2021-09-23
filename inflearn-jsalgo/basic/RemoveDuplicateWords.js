/*
 * 중복단어제거
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요
 * 출력하는 문자열은 원래의 입력 순서를 유지.
 */

function solution(s){
    let answer;
    const duplicated = new Set(str);
    answer = [...duplicated];
    return answer;
}

function solution2(s){
    let answer;
    //console.log(s.indexOf("time"));
    answer=s.filter(function(v, i){
        return s.indexOf(v)===i;
    });
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));
console.log(solution2(str));

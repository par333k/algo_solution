// https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript
// lv2 문자열 압축


const s = "xababcdcdababcdcd";
// result = 17;
//한글자부터 여러글자까지 효율성을 체크해야함
//2글자이상 같아야만 숫자대체가 가능하고 아니면 1글자씩 그냥 길이를 재거나 3글자 이상부터 글자가 줄어드는 효과가 있음
//반복문에서 문자를 자르는 숫자를 늘리면서 다음 문자와 비교해서 숫자+문자 형태의 문자열 만들어야함
function checkString(charNo, s) {
    let answerStr = "";
    let equalCount = 1;
    let currentStr = s;
    //i가 그냥늘면안됨 비교하는 글자수대로 늘어야
    for (let i = 0; i < currentStr.length; i+=charNo) {
        //비교한 숫자부터 나머니 문자를 비교해야함
        s = currentStr.substring(i, currentStr.length);
        let first = s.substr(0, charNo);
        let next = s.substr(charNo, charNo);
        if(first === next) {
            //같은글자수
            equalCount++;
        } else {
            if(equalCount !== 1) {
                answerStr += equalCount;
            }
            answerStr += first;
            equalCount = 1;
        }
    }
    return answerStr;
}

function solution(s) {
    let answer = 0;
    let minimum = checkString(1, s);
    //2개씩 줄이는걸 일단 최소라고 가정해두고 시작(기준)
    for(let i = 1; i < s.length -1; i++) {
        let checkStr = checkString(i+1, s);
        if(minimum.length > checkStr.length) {
            minimum = checkStr;
        }
    }
    answer = minimum.length;
    return answer;
}

console.log(solution(s));

// https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript
// lv1 문자열 내 마음대로 정렬하기

const strings = ["sun", "bed", "car"];
const n = 1;

// result = ["car", "bed", "sun"];
function solution(strings, n) {
    let answer = [];
    strings.sort((a , b) => {
        if(a[n] !== b[n]){
            if(a[n] > b[n]) {
                return 1;
            } else if (a[n] < b[n]) {
                return -1;
            }
        } else {
            if(a > b) {
                return 1;
            } else if (b > a) {
                return -1;
            }
        }

    })

    return strings;
}

console.log(solution(strings, n));

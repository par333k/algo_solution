// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
// lv1 이상한 문자열 만들기

const s = "try hello world";

// result = "TrY HeLlO WoRlD";
function solution(s) {
    let answer = '';
    let arr = [];
    let idx = 0;

    for(let i = 0; i < s.length; i++) {
        arr.push(s.substring(i,i+1));
    }

    for(let j= 0; j < arr.length; j++) {
        if(arr[j] == " ") {
            idx = 0;
        }

        if(arr[j] != " ") {
            if(idx == 0) {
                arr[j] = arr[j].toUpperCase();
                idx++
            } else if(idx%2 == 0) {
                arr[j] = arr[j].toUpperCase();
                idx++
            } else if(idx%2 != 0) {
                arr[j] = arr[j].toLowerCase();
                idx++
            }
        }
    }
    answer = arr.join('');
    return answer;
}

console.log(solution(s));
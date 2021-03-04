// https://programmers.co.kr/learn/courses/30/lessons/12922
// lv1 수박수박수박수박수?

const n = 4;

// result = "수박수박";
function solution(n) {
    let answer = '';
    let str = "수";
    let str1 = "박";

    //홀수일땐 수, 짝수일땐 박을 붙이면 됨
    //n까지의 배열의숫자를 확인해서 홀수면 수, 짝수면 박을 붙이고 스트링 리턴
    let arr = new Array();

    for (let i = 1; i <= n; i ++) {
        arr[i] = i;
    }
    arr[1] = "수";
    for (let j = 2; j <= n; j++) {
        if (arr[j]%2 == 0) {
            arr[j] = str1;
        } else {
            arr[j] = str;
        }
    }

    for (let k = 1; k < arr.length; k++) {
        answer += arr[k];
    }

    return answer;
}

console.log(solution(n));
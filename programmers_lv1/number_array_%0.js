// https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
// lv1 나누어 떨어지는 숫자배열

const arr = [5, 9, 7, 10];
const divisor = 5;
// result = [5,10];
function solution(arr, divisor) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%divisor == 0) {
            answer.push(arr[i]);
        }
    }
    if (answer.length > 0) {
        answer.sort((a, b) => a - b);
        
    } else {
        answer.push(-1);
    }
    
    return answer;
}

console.log(solution(arr,divisor));
// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
// lv1 같은 숫자는 싫어

const arr = [1,1,3,3,0,1,1];
//result = [1,3,0,1];

function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if(i < arr.length -1) {
            if(answer[answer.length -1] != arr[i+1] ) {
                answer.push(arr[i+1]);
            }
        }
    }

    return answer;
}

console.log(solution(arr));
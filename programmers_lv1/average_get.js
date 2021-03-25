// https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
// lv1 평균 구하기

const arr = [1,2,3,4];

// result = 2.5
function solution(arr) {
    let answer = 0;
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }

    answer = temp/arr.length;

    return answer;
}

console.log(solution(arr));
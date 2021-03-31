// https://programmers.co.kr/learn/courses/30/lessons/12950?language=javascript
// lv1 행렬의 덧셈

const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

// result = [[4,6],[7,9]];
function solution(arr1, arr2) {
    let answer = [];
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr1[i].length; j++) {
            let temp = arr1[i][j] + arr2[i][j];
            arr.push(temp);
        }
        answer.push(arr);
        arr = [];
    }
    return answer;
}

console.log(solution(arr1, arr2));

// https://programmers.co.kr/learn/courses/30/lessons/12949
// lv2 행렬의 곱셈

const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];

// result = [[15, 15], [15, 15], [15, 15]];
function solution(arr1, arr2) {
    let answer = Array(arr1.length).fill().map(() => Array());
    // arr1의 열의 길이 (arr1.length) 와 arr2의 행의 길이 (arr2[0].length)가 같은 배열만 나온다
    // 두개가 같아야 행렬의 곱셈이 가능하고, 결과는 arr1.length의 열의 길이와 arr2[0].length의 행의 길이를 갖는
    // 새 행렬이 나온다
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2[0].length; j++) {
            let temp = 0;
            for(let k = 0; k < arr1[0].length; k++) {
                temp += arr1[i][k] * arr2[k][j];
            }
            answer[i][j] = temp;
        }
    }

    return answer;
}

console.log(solution(arr1, arr2));
/*
 * 일곱 난장이
 * 아홉난쟁이의 키가 주어졌을 때, 일곱난장이를 찾아라.
 * 일곱난장이 키의 합은 100이다.
 */
function solution(arr){
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for(let i = 0; i < 8; i++) {
        for(let j = i+1; j < 9; j++) {
            if((sum - (answer[i]+answer[j])) === 100) {
                console.log(i, j);
                answer.splice(j, 1);
                console.log(answer);
                answer.splice(i, 1);
                console.log(answer);
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

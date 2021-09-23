/*
 * 홀수
 * 7개의 자연수가 주어질 때, 홀수인 자연수들을 모두 골라 그 합을 구하고,
 * 고른 홀수들 중 최소값을 찾는 프로그램 작성
 */

function solution(arr){
    let answer=[];
    let sum = 0;
    let min = 9999999;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]%2 === 1) {
            sum += arr[i];
            if(min > arr[i]) {
                min = arr[i]
            }
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

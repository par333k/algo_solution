/*
 * 최솟값 구하기
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성.
 */
function solution(arr){
    let answer, min=Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
    }
    answer = min;
    return answer;
}

let arr=[5, 7, 15, 3, 21, 9, 11];
console.log(solution(arr));

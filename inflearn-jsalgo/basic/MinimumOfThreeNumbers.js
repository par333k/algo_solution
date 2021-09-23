/*
 * 세 수 중 최솟값
 * 100 이하의 자연수 a,b,c를 입력받아 그 중 가장 작은 값 출력
 * 정렬을 사용하지 말 것
 */
function solution(a, b, c){
    let answer;
    let min = a;
    if(min > b) {
        min = b;
    }
    if(min > c) {
        min = c;
    }
    answer = min;
    return answer;
}

console.log(solution(6, 5, 11));

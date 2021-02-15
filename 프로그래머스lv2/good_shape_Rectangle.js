// https://programmers.co.kr/learn/courses/30/lessons/62048
// 멀쩡한 사각형 문제
// 최대공약수를 만드는 함수를 분리해서 활용

function gcd(a,b) {
    let num = a > b ? a : b;
    let max = 0;
    for(let i = 1; i <= num; i++) {
        if (a % i === 0 && b % i === 0) {
           max = i; 
        }
    }
    return max;
}
//빈칸박스 = 가로+세로 - 두 개의 최대공약수 -> 하나라도 홀수일경우 두개 더하기 - 1인줄 알았는데 30 이랑 9 하면 짝수 홀수인데 -3이어야함 
function solution(w, h) {
    var answer = 1;
    let emptybox = w + h - gcd(w,h);
    answer = w*h - emptybox;
    return answer;
}

solution(8, 12);
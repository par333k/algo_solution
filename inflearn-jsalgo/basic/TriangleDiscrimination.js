/*
 * 삼각형 판별하기
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 YES 출력
 * 만들 수 없으면 NO 출력
 * 삼각형의 결정조건 : 세 변의 길이를 알 때 (가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야)
 */

function solution(a, b, c){
    let answer="YES", max;
    let arr = [a, b, c];
    arr.sort((a,b) => b - a);
    console.log(arr);
    if (arr[0] < arr[1] + arr[2]) {
        return answer;
    }
    return "NO";
}

console.log(solution(13, 33, 17));

function solution2(a, b, c){
    let answer="YES", max;
    let tot=a+b+c;
    if(a>b) max=a;
    else max=b;
    if(c>max) max=c;
    if(tot-max<=max) answer="NO";
    return answer;
}

console.log(solution2(13, 33, 17));

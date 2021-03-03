// https://programmers.co.kr/learn/courses/30/lessons/12921
// lv1 소수 찾기

const n = 10;

// result = 4;
function solution(n) {
    let count = 0;
    let arr = new Array();
    //소수가 아닌 것들을 빼면 소수가 됨
    //자기자신을 제외한 모든 배수를 n개의 숫자 내에서 확인
    //확인된 숫자를 다 0으로 두면 나머지가 소수
    //n 까지 숫자를 전부 배열에 일단 넣고 확인하자
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    //소수는 임의숫자 x의 배수가 아니어야 함, 자기자신과 1만 배수임
    //제곱근까지만 나누어서 나머지가 없으면 소수가 아님(루트 9면 3)
    //나눠서 나머지 없는 애들을 0으로 설정하자
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i] == 0) { // 이미 체크된 수의 배수는 확인하지 않는다
            continue;
        }

        for (let j = i + i; j <= n; j += i) { // i를 제외한 i의 배수들은 0으로 체크, 소수가 아닌 애들
            arr[j] = 0;
        }
    }

    for (let i = 2; i <= n; i++) {
        if(arr[i] != 0){
            count++;
        }
    }
    return count;
}

console.log(solution(n));
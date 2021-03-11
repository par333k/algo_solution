// https://programmers.co.kr/learn/courses/30/lessons/12941
// lv2 최솟값만들기

const A = [1,4,2];
const B = [5,4,4];

// result = 29;
function solution(A,B){
    let answer = 0;

    A.sort((a,b) => {
        return a - b;
    })

    B.sort((a,b) => {
        return b - a;
    })

    for(let i = 0; i < A.length; i++) {
        answer += (A[i]*B[i]);
    }

    return answer;
}

console.log(solution(A,B));
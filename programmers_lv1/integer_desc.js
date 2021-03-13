// https://programmers.co.kr/learn/courses/30/lessons/12933
// lv1 정수 내림차순으로 배치하기

const n = 118372;

// result = 873211;
function solution(n) {
    var answer = 0;
    n = n.toString();
    let arr = [];
    for (let i = 0; i < n.length; i ++) {
        arr.push(Number(n[i]));
    }
    
    arr.sort((a, b) => {
       return b - a
    });
    answer = arr.join('');
    answer = Number(answer);    
    return answer;
}

console.log(solution(n));
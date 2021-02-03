// https://programmers.co.kr/learn/courses/30/lessons/68644
// 두 개 뽑아서 더하기 문제

const numbers = [2,1,3,4,1];

function solution(numbers) {
    let answer = [];
    //순서대로 numbers 배열 숫자 더한뒤 set 사용
    //오름차순 sort
    let stack = [];
    let sum;
    for (let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            sum = numbers[i] + numbers[j];
            stack.push(sum);
        }
    }
    answer = Array.from(new Set(stack));
    answer.sort((a, b) => {
        return a - b;
    });

    return answer;
}

console.log(solution(numbers));
// https://programmers.co.kr/learn/courses/30/lessons/43165
// lv2 타겟 넘버
// 기준값을 들고 끝까지 경우의 수를 파고들어 타겟과 같은 경우를 고르는 것
// dfs 하면서 느끼는건데 이산수학 책 사서 공부해야겠다..


const numbers = [1,1,1,1,1];
const target = 3;
// result = 5;
function solution(numbers, target) {
    let count = 0;
    let sum = 0;

    const dfs = (numbers, target, idx) => {
        if (idx === numbers.length) {
            sum = 0;
            sum = numbers.reduce((sum, cur) => {
                return sum + cur;
            }, 0);
            if (sum === target) {
                count++;
            }
        } else {
            //양수 하나씩 변경
            numbers[idx] *= 1;
            dfs(numbers, target, idx+1);
            //음수 하나씩 변경
            numbers[idx] *= -1;
            dfs(numbers, target, idx+1);
        }
    };
    dfs(numbers, target, 0);
    return count;
}


console.log(solution(numbers, target));

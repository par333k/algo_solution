// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript
// lv1 소수 만들기

const nums = [1,2,7,6,4];

// result = 4
function solution(nums) {
    let answer = 0;
    let sum = 0;
    // 1,2,3 / 1,3,4 / 1,2,4 / 2,3,4
    for (let i = 0; i < nums.length -2; i++) {
        for(let j = i+1; j < nums.length -1; j++) {
            for (let k = j+1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) {
                    answer++;
                }
            }
        }
    }

    return answer;
}

function isPrime(n) {
    if (n % 2 === 0) {
        return false;
    }

    let divisor = 3;
    let limit = Math.sqrt(n);

    while (limit >= divisor) {
        if (n % divisor === 0) {
            return false;
        }
        divisor += 2;
    }

    return true;
}

console.log(solution(nums));

// https://programmers.co.kr/learn/courses/30/lessons/12977
// lv1 소수 만들기
// 소수 찾기랑 소수 만들기가 같은 레벨인게 말이 되나..?

const nums = [1,2,7,6,4];

//result = 4;
function solution(nums) {
    let answer = 0;
    let sums = [];
    // 1,2,3 / 1,3,4 / 1,2,4 / 2,3,4
    const dfs = (nums, count, arr) => {
        if (count === 3) {
            sums.push([...arr]);
        } else {
            for (let i = 0; i < nums.length; i++) {
                arr.push(nums[i]);
                dfs(nums.slice(i + 1), count +1, arr);
                arr.pop();
            }
        }
    }

    dfs(nums, 0, []);

    for (let i = 0; i < sums.length; i++) {
        let sum = 0;
        for (let j = 0; j < sums[i].length; j++) {
            sum += sums[i][j];
        }
        const check = isPrime(sum);
        if(check) {
            answer++;
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

// 다른 풀이. 3개만 계산하면 되니까 3중 반복문 이용
/*
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
*/

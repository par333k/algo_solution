/**
 *  계단 오르기
 *  입력으로 주어지는 n 개의 계단을 1번에 1개 혹은 2개 올라
 *  도달할 수 있는 방법의 가짓수를 찾아내자
 *  
 *  제한사항
 *  1. 입력은 정수로 주어진다
 *  2. 모든 경우의 수의 '가짓수'를 반환해야 한다
 *  
 *  아이디어
 *  1. Brutal force
 *  1-1. 순회를 하며 계단을 오르고 높이와 비교한다
 *  1-2. 계단을 오르는 방식은 재귀를 통해 인덱스를 증가시킨다
 *
 */

const n = 3;

function solution(n) {
    function climb(n, i) {
        if (n === i) {
            return 1
        }
        if (n < i) {
            return 0
        }
        return climb(n, i + 1) + climb(n, i + 2);
    }

    return climb(n, 0);
}

console.log(solution(n));

/*
Recursion

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed

climbStairs (n)는 n 걸음을 밟는 다양한 방법의 총 수를 반환합니다.
따라서 climbStairs (n-1) + climbStairs (n-2)는 결과를 제공합니다.
1 ~ 2 걸음 올라갈 수 있기 때문에

보다 최적화 된 솔루션을 위해 배열을 사용하여 이미 계산 된 결과를 추적합니다.
*/

var climbStairs = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    // T.C: O(N)
    // S.C: O(N)
};

console.log(climbStairs(n));

// S.C: O(1)
var climbStairs = function(n) {
    let step2Before = 1;
    let step1Before = 1;
    for (let i = 2; i <= n; i++) {
        let tmp = step1Before;
        step1Before = step2Before + step1Before;
        step2Before = tmp;
    }
    return n > 0 ? step1Before : 0;
};


/*
DP

dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step)
DP

dp [i]는 i 단계를 수행하는 다양한 방법의 총 수를 나타냅니다.
그래서 우리는 dp [n]을 얻고 싶습니다.
dp [n] = dp [n-1] + dp [n-2] 왜냐하면 1 단계 또는 2 단계를 취할 수 있기 때문입니다.

두 가지 기본 케이스가 있습니다. dp [1] = 1 및 dp [2] = 2입니다.
1 걸음은 한 가지 방법이 있고 2 걸음은 두 가지 방법이 있습니다 (1 걸음 + 1 걸음 OR 2 걸음)
*/
var climbStairs = function(n) {
    let dp = new Array(n + 1);
    dp[1] = 1, dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
};


// 피보나치
var climbStairs = function(n) {    
    let prev = 0;
    let cur = 1;
    let temp;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp; 
    }
    return cur;
};
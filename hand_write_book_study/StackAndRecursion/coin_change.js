/**
 *  동전 교환
 *  가게에 가서 물건을 사고 물건값을 지불하고 남은 잔돈을 거슬러 주는 과정을 코딩하라.
 *  가장 적은 개수의 동전으로 반환해야 하는 문제다. 해당 금액을 구성하는데 필요한 최소 코인수를 반환하고
 *  불가능할경우 -1을 리턴하라.
 *
 *  아이디어
 *  재귀는 대부분 모든 경우의 수를 찾아 가장 최적의 답을 찾는 과정을 거친다.
 *  입력값을 줄여가거나 늘려가는 방식으로 종료 조건에 다가가보자.
 *
 */

const coins = [1, 2, 5];
const val = 100;
// DFS + Greedy + Pruning
function solution(coins, val) {
    coins.sort((a, b) => b - a);
    let answer = Infinity;

    const change = (i, v, count) => {
        const coin = coins[i];

        // 마지막 가장 작은 코인
        if ( i === coins.length - 1 ) {
            if (v % coin === 0) {
                // 남은 숫자를 제일 작은 마지막 코인으로 나눠서 나머지가 0이면
                // 반환하는 갯수를 이전의 반환하는 갯수와 count + v를 coin으로 나눈 몫을 비교하여
                // 더 작은걸 저장
                answer = Math.min(answer, count + Math.floor((v / coin)));
            }
        } else {
            // count + k < answer 는 가지치기를 위함, 불필요한 계산을 줄여준다.
            // 이전 answer보다 동전의 갯수가 크면 할 필요가 없음
            for (let k = Math.floor((v / coin)); k >= 0 && count + k < answer; k--) {
                change(i + 1, v - coin * k, count + k);
            }
        }
};

    change(0, val, 0);
    return answer === Infinity ? -1 : answer;
}

console.log(solution(coins, val));


/**
 * 아이디어
 * https://leetcode.com/problems/coin-change/discuss/1104553/JS-Python-Java-C%2B%2B-or-Fastest-DFS-Recursive-Solution-w-Explanation-or-beats-DP-Solutions
 * 여기서 순진한 접근 방식은 코인 (C)의 모든 순열을 시도하여 어떤 코인이 목표 금액 (A)에 
 * 도달 할 수 있는지 확인하는 것이지만 TLE를 쉽게 달성 할 수 있습니다.
 * 이것을 줄이는 방법에 대해 생각할 때 일반적으로 가능한 한 더 큰 동전을 많이 사용하면 
 * 더 나은 답을 얻는 데 도움이 될 수 있음을 알 수 있습니다. 당연히 C 정렬부터 시작해야한다는 뜻입니다.
 * 다음 논리적 아이디어는 최종 솔루션을 향한 모든 단계에서 가장 이상적인 결과를 추적 할 수있는 동적 프로그래밍 (DP) 솔루션입니다. 
 * 이 문제에 대한 좋은 DP 솔루션이 있지만 최선의 솔루션은 아닙니다.
 * 여기서 가장 좋은 솔루션은 실제로 DP 데이터 구조가 필요없는 재귀를 사용하는 DFS (Depth-First Search) 솔루션입니다.
 * 앞서 깨달았 듯이 여기서 일반적인 전략은 남은 양 (amt)을 채우기 위해 사용 가능한 가장 큰 코인을 최대한 많이 사용하는 것입니다. 
 * 그러나 불행히도 그 규칙은 매번 작동하지 않습니다.
 * C = [5,4,1] 및 A = 8 인 상황을 고려하십시오. 
 * 기본 전략은 [5,1,1,1]의 동전이 8에 도달하도록 유도 할 수 있지만 이 4 개의 동전은 확실히 두 개의 동전 [4,4].
 * 그래서 우리는 우리의 규칙을 수정해야합니다. 
 * 논리적인 움직임은 우리의 이전 전략에서 시작하여 우리가 잘 맞을 때까지 거꾸로 작업하는 것입니다. 
 * 우리는 가장 큰 코인을 가져다가 최대한 많이 채운 다음, 다음으로 큰 코인에 재귀 함수 (rc)를 실행하여 프로세스를 반복 할 수 있습니다. 
 * 재귀가 끝나면 가장 큰 동전 중 하나를 제거하고 재귀를 다시 시작합니다.
 * 나머지 작업은 좋은 조건으로 가능한 한 많은 낭비를 줄이는 것입니다. 당연히 목표 금액을 초과하면 중단해야합니다. 
 * 그리고 주어진 재귀에서 초기 채우기를 수행 한 후에는 역 추적 할 때만 잠재적 인 결과가 더 커집니다. 
 * 따라서 초기 채우기가 이미 현재 최상의 결과보다 큰 결과를 생성하는 경우 전체 재귀 분기를 닫아야합니다.
 */
// ~ 는 틸트연산자
// Bitwise NOT 연산자로 "~0101"는 "1010"이 된다.
const coinChange = function(C, A) {
    C = Uint32Array.from(C).sort()
    let ans = Infinity
    const rc = (amt, num, cix) => {
        if (!amt) ans = Math.min(num, ans)
        else if (amt > 0 && ~cix) {
            let n = Math.ceil(amt / C[cix])
            if (n + num >= ans) return
            while (~n) rc(amt - n * C[cix], num + n--, cix - 1)
        }
    }
    rc(A, 0, C.length-1)
    return ans < Infinity ? ans : -1
};

console.log(coinChange(coins, val));

// DP
const coinChange = (coins, amount) => {
    // dp[i] represents the least amount of coins that can make the value equals to the i
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1,
                );
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

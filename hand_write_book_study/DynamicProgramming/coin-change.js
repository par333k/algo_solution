/**
 *  각기 다른 액면을 가진 동전 배열과 거슬러줘야 하는 총 금액을 입력으로 받으면
 *  잔돈의 조합으로 거스름돈을 맞춰주기 위한 최소한의 동전 개수를 반환하자.
 *
 *  아이디어
 *  1. Brute-force
 *  거스름돈 총액이 0이면 0을 반환
 *  최소 개수(비교를 위함)를 최댓값(infinity)로 설정
 *  coins(동전 배열)을 순회한다.
 *      - amount가 현재 coin보다 크다면 재귀 호출로 amount - coin 하여 호출
 *      - 재귀 호출의 복귀로 호출 개수를 반환한다. 반환된 값이 현재 순회에서
 *      최소 개수와 비교하여 더 작은 값으로 업데이트
 *  최소 개수 + 1을 반환
 *  시간 복잡도: O(n^2)
 *  공간 복잡도: O(1)
 *
 *  2. 동적 프로그래밍 - Top Down
 *  총액 크기만큼 배열 생성(-1로 초기화)
 *      - 각 인덱스는 0 ~ 총액(amount)까지
 *  dp[amount]가 -1이 아니면 바로 반환
 *  동전 액면만큼 순회
 *      - 현재 amount 가 동전 액면보다 크면 동전 액면을 amount 에서 빼고 재귀 호출
 *      - 재귀 호출의 복귀로 호출 개수를 반환한다. 반환된 값이 현재 순회에서 최소 개수와
 *      비교하여 더 작은 값으로 업데이트
 *  dp[amount]에 최소 개수 + 1 하여 더하고 해당 값을 반환
 *  시간 복잡도: O(c*a): a는 amount c는 동전 개수
 *  공간 복잡도: O(a)
 *
 *  3. 동적 프로그래밍 - Bottom up
 *  총액 크기만큼 배열 생성(-1 로 초기화)
 *      - 각 인덱스는 0 ~ 총액(amount) 까지
 *  0에서 총액만큼 순회
 *      - 액면 크기를 순회
 *      - dp[a - coin[c]]와 dp[i]와 비교하여 작은 값으로 dp[a]를 업데이트
 *  dp[amount]를 반환
 *  시간 복잡도: O(c*a) : a는 amount
 *  공간 복잡도: O(a)
 */
//1
//brutal force
const coins = [1, 2, 5];
const val = 100;
// DFS + Greedy + Pruning
function solution(coins, val) {
    coins.sort((a, b) => b - a);
    let answer = Infinity;

    const change = (i, v, count) => {
        const coin = coins[i];

        // 마지막 가장 작은 코인
        if (i === coins.length - 1) {
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
}
//2
// DP top-down
const coinChange2 = function(coins, amount) {
    const memo = new Map();

    function permute(left) {
        if(memo.has(left)) return memo.get(left)
        if(left === 0) return 0;
        let min = Infinity;

        for(let coin of coins) {
            if(left-coin >= 0) min = Math.min(min, permute(left-coin));
        }
        memo.set(left, min+1);
        return min + 1;
    }
    const result = permute(amount);
    return result === Infinity ? -1 : result;
};

const coinChange22 = function(coins, amount) {
    const dp = Array(amount + 1).fill(-1);

    const permute = (remain) => {
        if(remain === 0) return 0;
        if(dp[remain] != -1) return dp[remain];

        let min_coin = Infinity;
        for (let coin of coins) {
            if (remain >= coin) {
                min_coin = Math.min(min_coin, permute(remain - coin));
            }
        }
        dp[remain] = min_coin + 1;
        return dp[remain];
    }
    const result = permute(amount);
    return result === Infinity ? -1 : result;
};


//3
//DP - Bottom up
const coinChange3 = (coins, amount) => {
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

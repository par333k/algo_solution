/**
 *   두 문자열이 주어지면 해당 두 문자열의 최장 공통부분 수열의 길이를 반환하자.
 *   부분 수열이란 연속적이지는 않으나 순서대로 나열될 수 있는 문자열을 말한다.
 *   예를 들어 'abced'에서 부분수열은 'abc', 'ace', 'aed'등 각 문자의 순서를 지킨
 *   모든 부분 문자열을 말한다. 그렇다면 두 문자열의 최장 공통부분 수열이라는 것은 어떤것일까?
 *   두 문자열이 각각 abcedf 와 ebcf 로 주어졌다. 순서대로 문자열을 나열해 공통부분을 찾아야 하기 때문에
 *   e를 선택할 경우 c를 선택할 수 없다. 이런식으로 고를경우 첫 자를 b를 선택해 'bcf'가 가장 긴 문자열이 된다.
 *
 *   제한사항
 *   전체탐색의 경우 DP를 적용하는게 효과적인 문제들에선 시간복잡도가 O(2^n)이 되는 경우가 많다.
 *   이 경우 시간복잡도가 너무 높아서 제한사항을 초과하게 되는 경우가 많으니 이 부분을 고려해야 한다.
 *
 *   아이디어
 *   1. Brute force
 *   str1의 인덱스 i, str2의 인덱스 j를 0으로 초기화한다.
 *   재귀 함수를 호출한다
 *      - i 혹은 j가 각 문자열의 접근 인덱스를 넘어섰다면 0을 반환
 *      - str1[i]와 str2[j]가 같다면 i + 1, j + 1을 인자로 재귀호출한다.
 *      (문자가 같기 때문에 1을 더해준다)
 *      - 같지 않다면, i + 1, j 조합으로 i, j + 1의 조합으로 재귀호출 하여
 *      최종 큰 값을 선택 및 반환한다.
 *   시간 복잡도 : O(2^n)
 *   공간 복잡도 : O(1)
 *
 *   2. DP - Top Down
 *   dp[n][m]을 -1으로 초기화
 *   dp[i][j]가 -1이 아니면, 해당 값을 반환
 *   전체탐색에서 각 재귀 호출의 반환을 dp[i][j]에 저장한다.
 *   시간 복잡도 : O(n * m), str1의 길이 n, str2의 길이 m
 *   공간 복잡도 : O(n * m), str1의 길이 n, str2의 길이 m
 *
 *   3. DP - Bottom Up
 *   dp[n][m]을 할당하여 -1로 초기화
 *   n 만큼 순회(i)
 *      - m 만큼 순회(j)
 *      - str[i]와 str2[j]가 같다면 dp[i][j]에 dp[i-1][j-1] + 1을 더해준다
 *      - 같지 않다면, dp[i-1][j]과 dp[i][j-1]중 큰 값을 dp[i][j]에 업데이트한다.
 *   dp[n-1][m-1]을 반환한다.
 *   시간 복잡도 : O(n * m), str1의 길이 n, str2의 길이 m
 *   공간 복잡도 : O(n * m), str1의 길이 n, str2의 길이 m
 */
// 1
// Time lemit Exceeded
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function(text1, text2) {
    let i = 0;
    let j = 0;
    const reclusive = (i, j) => {
        if (i >= text1.length) return 0;
        if (j >= text2.length) return 0;

        if(text1[i] === text2[j]) {
            return 1 + reclusive(i+1, j+1)
        } else {
            return Math.max(reclusive(i+1, j), reclusive(i, j+1));
        }
    }
    return reclusive(i, j);
};

//1.5
// memorization
const longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const memo = Array.from({ length: m }, () => {
        new Uint16Array(n);
    });
    return recursion(m-1, n-1);

    function recursion(index1, index2) {
        if(index1 < 0 || index2 < 0) return 0;
        if(memo[index1][index2]) return memo[index1][index2];

        let result;

        if(text1[index1] === text2[index2]) {
            result = recursion(index1 - 1, index2 - 1) + 1;
        } else {
            result = Math.max(recursion(index1, index2 - 1), recursion(index1-1, index2));
        }
        memo[index1][index2] = result;
        return result;
    }

}


// dp
const longestCommonSubsequence = function(text1, text2) {
    const dp = [];
    let m = text1.length;
    let n = text2.length;

    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0);
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // two  possible scenarioes:
            // 1. the current char of text1 and text2 does not match
            // 2. the current char of text1 and text2 matches

            if (text1.charAt(i - 1) != text2.charAt(j - 1)) {
                // check left and top for longer subsequence length
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            else {
                // check diag for prev longest subsequence length and add 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }

    return dp[m][n];
};

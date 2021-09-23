/**
 *  동일 합으로 배열 분할 문제
 *  양의 정수로 구성된 배열이 주어지면 해당 배열을 두 부분으로 분할하여
 *  동일한 합의 값을 가지는지 확인해보자. 예를 들어 [1,2,3,4]가 있고
 *  [1,4], [2,3]으로 분할하면 각 분할된 배열 요소의 합이 5로 동일하다.
 *
 *  제한사항
 *  1. 양의 값(1 ~100 값)을 가지는 정수형 배열
 *  2. 배열의 크기는 1보다 크고 200보다 작다.
 *
 *  아이디어
 *  1. 완전 탐색
 *  배열의 전체 합을 2로 나눔
 *  전체 합이 2로 나눈 나머지가 0이 아니라면 바로 거짓(false를 반환)
 *  배열의 인덱스를 하나씩 증가시키며 전체 합을 반으로 나눈 값 보다
 *  현재 인덱스 값이 작다면 해당 값을 포함하여 재귀 호출
 *      - 반환값이 true일때 바로 true를 반환
 *  재귀 호출 복귀 후에 해당 인덱스 값을 포함하지 않고 재귀 호출
 *  시간 복잡도: O(2^n)
 *  공간 복잡도: O(n), 재귀 호출로 인한 생성된 스택
 *
 *  2. 동적프로그래밍 (Top Down)
 *  전체 탐색에서 중복된 연산을 저장하기 위한 공간 생성
 *      - 초깃값 -1
 *      - 전체 탐색에서 변화된 값은 참조 인덱스와 합의 값
 *  dp[배열 최대 인덱스][누적 합]이 -1이 아니면 해당 값 반환
 *  dp[배열 최대 인덱스][누적 합]으로 구성하여 매 재귀 호출을 진행하며
 *  dp 배열 결과 구성
 *  최종 dp[n-1][s]를 반환
 *  시간 복잡도: O(n * s): n개의 요소, s는 n개의의 요소 전체 합
 *  공간 복잡도: O(n * s).
 *
 *
 *  3. 동적프로그래밍 (Bottom Up)
 *  dp[n-1][s+1]을 false로 모두 초기화
 *  생성된 2차원 배열 (0,0)에서부터 누적 합의 1/2까지 순회
 *      - 배열의 숫자를 포함하지 않고 dp[i-1][s]의 값이 이미 확인된 상태(True)라면
 *      dp[i][s]도 같은 값으로 업데이트
 *      - 현재 순회 값(s)이 num[i]보다 크다면, dp[i-1][s-num[i]]의 결과를
 *      dp[i][s]에 적용
 *  dp[n-1][s] 반환
 *  시간 복잡도 : O(n * s)
 *  공간 복잡도: O(n * s]
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartitionDP = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    let half = sum / 2; // 소수점이 없으므로 나누는 것이 좋다.

    // 이제 우리의 목표는 적어도 하나의 하위 배열이 'half'값과 같은 합을 갖는지 찾는 것입니다.
    // 하위 배열의 나머지 절반이 동일한 값을 가져야만 true이다.

    let dp = [];

    // Base cases
    dp[0] = true;

    for (let index = 0; index < nums.length; ++ index) {
        let num = nums[index];
        for (let i = half; i >= num; -- i) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[half] || false;
};
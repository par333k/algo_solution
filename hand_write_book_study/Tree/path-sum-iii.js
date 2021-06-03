/**
 *  트리 경로의 합
 *  노드에 정수형 데이터가 있는 이진 트리가 입력으로 주어진다.
 *  각 경로에 있는 노드의 데이터 합이 특정 값이 되는 경우가 몇 개인지 확인하여 반환하라.
 *
 *  제한사항
 *  1. 정수형 데이터를 가진 트리(양수, 음수, 0)
 *  2. 트리의 경로 조건
 *      - 시작은 어떤 노드나 가능
 *      - 다음 경로는 자식 노드만 가능함
 *  3. sum은 정수형 값
 *
 *  아이디어
 *  1. Brute-force
 *  너비 우선 탐색으로 모든 노드 방문
 *      - 각 방문한 노드를 루트 노드로 하는 트리를 깊이 우선 탐색으로 방문하면서
 *      경로의 합을 계산
 *      - 경로의 합이 입력으로 주어지는 값과 일치하는지 확인
 *  모든 순회가 끝나면 합이 일치 했던 횟수를 반환
 *  -시간 복잡도 : O(nlogn)
 *  -공간 복잡도 : O(logn)
 *  2. Brute-force2
 *  깊이 우선 탐색으로 모든 노드 방문
 *      - 각 방문한 노드를 루트 노드로 하는 트리를 깊이 우선 탐색으로 방문하면서
 *      경로의 합을 계산
 *      - 경로의 합이 입력으로 주어진 값과 일치하는지 확인
 *  모든 순회가 끝나면 합이 일치 했던 횟수를 반환
 *  -시간 복잡도 : O(nlogn)
 *  -공간 복잡도 : O(logn)
 *  3. Hash Table
 *  해시 테이블을 생성하고 { 0 : 1 }로 초기화
 *  깊이 우선 탐색으로 모든 노드 방문
 *      - (현재 루트에서 이동한 누적값 + 현재 노드 값 - sum)이 해시테이블에 있는지 확인
 *      있으면 count 값 1 증가
 *      - (현재 루트에서 누적된 값 + 현재 노드 값)을 키로 하고 값을 1로 하는 데이터로
 *      해시 테이블에 추가
 *      - 왼쪽 노드 or 오른쪽 노드로 이동
 *   -시간 복잡도: O(n)
 *   -공간 복잡도: O(n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function(root, targetSum) {

    let answer = 0;

    const dfs = (node, sum) => {
        if(!node) {
            return;
        }

        sum -= node.val;

        if(sum === 0) {
            answer++;
        }

        dfs(node.left, sum);
        dfs(node.right, sum);
    };

    const main = (node, sum) => {
        if(!node) return;
        dfs(node, sum);
        main(node.left, sum);
        main(node.right, sum);
        return;
    }

    main(root, targetSum);

    return answer;
};

const pathSum2 = function (root, sum) {
    const freq = { 0: 1 }
    function dfs (root, currSum) {
        if (!root) return 0
        currSum += root.val
        const oldSum = currSum - sum
        let res = freq[oldSum] || 0
        freq[currSum] = (freq[currSum] || 0) + 1
        res += dfs(root.left, currSum) + dfs(root.right, currSum)
        freq[currSum]--
        return res
    }
    return dfs(root, 0)
}

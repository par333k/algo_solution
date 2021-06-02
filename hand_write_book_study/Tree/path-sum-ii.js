/**
 *  트리 경로의 합
 *  노드에 정수형 데이터가 있는 이진 트리가 입력으로 주어진다.
 *  각 경로에 있는 노드의 데이터 합이 특정 값이 되는 경우의 경로를 배열로 반환하라
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
 *  모든 순회가 끝나면 합이 일치 했던 경로를 배열로 반환
 *  -시간 복잡도 : O(nlogn)
 *  -공간 복잡도 : O(logn)
 *  2. Brute-force2
 *  깊이 우선 탐색으로 모든 노드 방문
 *      - 각 방문한 노드를 루트 노드로 하는 트리를 깊이 우선 탐색으로 방문하면서
 *      경로의 합을 계산
 *      - 경로의 합이 입력으로 주어진 값과 일치하는지 확인
 *  모든 순회가 끝나면 합이 일치 했던 경로를 배열로 반환
 *  -시간 복잡도 : O(nlogn)
 *  -공간 복잡도 : O(logn)
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
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {

    const answer = [];

    const dfs = function(curr, currentSum, path) {
        if(!curr) {
            return;
        }

        currentSum += curr.val;

        if(currentSum === targetSum && !curr.left && !curr.right) {
            path.push(curr.val);
            answer.push(path.slice());
            // 백트래킹
            path.pop();
            return;
        }

        path.push(curr.val);

        if(curr.left) {
            dfs(curr.left, currentSum, path);
        }

        if(curr.right) {
            dfs(curr.right, currentSum, path);
        }
        // 백트래킹
        path.pop();
    }

    dfs(root, 0, []);

    return answer;
};

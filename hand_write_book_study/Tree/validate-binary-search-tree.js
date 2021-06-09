/**
 *  이진 검색 트리 검증
 *  주어진 이진 검색 트리가 이진 트리의 조건을 만족하는지 아닌지 확인해보자
 *  이진트리는 부모 노드를 기준으로 왼쪽 노드는 부모 노드보다 작은 값이 보장되고
 *  오른쪽 노드는 해당 부모 노드보다 항상 큰 값이라는 보장이 된다
 *
 *  아이디어(재귀)
 *  1. 트리의 최솟값 / 최댓값을 추적하기 위한 변수를 설정한다 - 음수의 무한대 변수 / 양수의 무한대 변수
 *  2. 트리를 방문한다.
 *      - 노드 값이 low보다 크고, high보다 작은지 확인
 *      - 왼쪽 노드로 재귀 호출
 *      - 오른쪽 노드로 재귀 호출
 *
 *  아이디어(반복-스택)
 *  1. 트리의 최솟값 / 최댓값을 추적하기 위한 변수를 설정한다 - 음수의 무한대 변수 / 양수의 무한대 변수
 *  2. 루트를 스택에 넣는다.
 *  3. 스택이 빌 때 까지
 *      - 노드의 값이 low 보다 크고, high 보다 작은지 확인
 *      - 왼쪽 / 오른쪽 노드를 스택에 푸시
 *
 *  아이디어(중위 순회)
 *  1. 트리를 중위 순회한다.
 *  2. 다음 노드는 이전 노드 보다 값이 항상 커야 한다.
 *      - 작다면 False(이진 검색 트리가 아님)를 반환
 *      - 크다면 계속 탐색
 *
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(n)
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
 * @return {boolean}
 */
// 아이디어 1
const isValidBST = function(root) {
    let low = -Infinity;
    let high = Infinity;

    const isValidBSTRec = (node, low, high) => {
        if(!node) return true;

        if(node.val <= low || node.val >= high) {
            return false;
        }

        const left = isValidBSTRec(node.left, low, node.val);
        const right = isValidBSTRec(node.right, node.val, high);

        if(left && right) {
            return true;
        }

        return false;
    }

    return isValidBSTRec(root, low, high);
};

// 아이디어 2
const isValidBSTStack = function(root) {
    if (!root) return true;
    const stack = [];
    const arr = [root, -Infinity, Infinity];

    stack.push(arr);

    while (stack.length > 0) {
        const now = stack.pop();
        const node = now[0];
        const low = now[1];
        const high = now[2];

        let data = node.val;
        if (data <= low || data >= high) {
            return false;
        }

        if(node.left) {
            stack.push([node.left, low, data]);
        }

        if(node.right) {
            stack.push([node.right, data, high])
        }
    }
    return true;
};

// 아이디어3
const isValidBST2 = function(root) {
    let prev = -Infinity;
    const inorderTree = (node) => {
        if (!node) return true;
        if(!inorderTree(node.left)) {
            return false;
        }

        if(node.val <= prev) {
            return false
        }
        prev = node.val;

        return inorderTree(node.right);
    }
    return inorderTree(root);
};

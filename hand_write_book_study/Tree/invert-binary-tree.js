/**
 *  이진 트리 반전
 *  트리의 루트를 기준으로 각 좌우 노드의 위치를 바꾸어라
 * 아이디어
 * 1. 반복 - stack
 * 스택 생성
 * 루트 노드를 스택에 추가
 * 스택이 비어있을 때까지
 *  - 노드를 방문
 *  - 왼쪽 / 오른쪽 노드 교환(swap)
 *  - 스택에 왼쪽, 오른쪽 노드 추가
 *
 * 2. 재귀 - 스택
 * 노드가 None 이라면 반환
 * 노드의 왼쪽, 오른쪽 노드 교환(swap)
 * 왼쪽 노드로 재귀 호출
 * 오른쪽 노드로 재귀 호출
 *
 * 3. 큐
 * 큐를 생성
 * 루트를 큐에 추가
 * 큐가 비어 있을 때까지
 *  - 현재 큐가 가지고 있는 모든 노드를 꺼냄
 *  - 꺼낸 노드의 왼쪽과 오른쪽 노드의 교환
 *  - 왼쪽과 오른쪽 노드를 큐에 추가
 *
 * 셋 다
 * 시간 복잡도 : O(n)
 * 공간 복잡도 : O(n)
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
 * @return {TreeNode}
 */

const invertTree1 = function(root) {
    if(!root) return root;

    const stack = [];

    stack.push(root);

    while(stack.length > 0) {
        let node = stack.pop();

        let left = node.left;
        node.left = node.right;
        node.right = left;

        if(node.left) {
            stack.push(node.left);
        }
        if(node.right) {
            stack.push(node.right);
        }
    }

    return root;
};


const invertTree2 = function(root) {
    if(!root) return root;

    let left = root.left;
    root.left = root.right;
    root.right = left;

    invertTree2(root.left);
    invertTree2(root.right);

    return root
};

const invertTree3 = function(root) {
    if(!root) return root;

    const queue = [];
    queue.push(root);

    while(queue.length > 0) {
        let cnt = queue.length;

        for (let i = 0; i < cnt; i++) {
            let node = queue.shift();

            let left = node.left;
            node.left = node.right;
            node.right = left;

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return root
};

// modern best
const modernInvertTree = function(root) {
    if (root == null) return root;
    [root.left, root.right] = [modernInvertTree(root.right), modernInvertTree(root.left)];
    return root;
}

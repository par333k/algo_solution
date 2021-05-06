/**
 *  단일 연결 리스트가 주어지면 이 연결 리스트를 역순으로 배치해보자.
 *
 *  제한사항
 *  1. 길이가 정해진 단일 연결리스트가 주어진다
 *  2. 연결리스트로 반환해야 한다.
 *
 *  아이디어
 *  1. 반복
 *  1-1. 이전(prev), 현재(curr), 다음(next)를 유지 운영한다.
 *  1-2. 현재 노드가 None이 아닐 때까지,
 *      - 현재의 다음(next)을 임시 저장한다.
 *      - 현재의 다음(next)을 이전(prev)를 가리키도록 업데이트 한다.
 *      - 이전(prev)를 현재 노드로 이동
 *      - 현재 노드를 임시 저장한 다음 노드로 이동한다.
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(1)
 *
 *  2. 스택
 *  2-1. 노드를 저장할 스택 생성
 *  2-2. 연결 리스트를 순회
 *      - 스택에 현재 노드를 추가
 *      - 마지막 노드는 넣지 않도록 한다.
 *  2-3. 스택의 모든 요소를 하나씩 꺼냄
 *      - 마지막 노드로부터 꺼내진 요소를 다음(next)로 연결
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(n), 스택에 모든 노드를 저장
 *
 *  3. 재귀
 *  3-1. 노드를 저장할 스택 생성
 *  3-2. 연결 리스트를 순회
 *      - 스택에 현재 노드를 추가
 *      - 마지막 노드는 넣지 않도록 한다.
 *  3-3. 스택의 모든 요소를 하나씩 꺼냄
 *      - 마지막 노드로부터 꺼내진 요소를 다음(next)로 연결
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(n), 재귀도 스택을 사용
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 아이디어 1
function solution(head) {
    let prev = null;
    let curr = head;

    while (curr != null) {
        let next_temp = curr.next;
        console.log(next_temp);
        curr.next = prev;
        prev = curr;
        curr = next_temp;
    }

    return prev;

}

// 아이디어 2
function solution2(head) {
    if(head === null) return head;
    let stack = [];
    while(head !== null){
        stack.push(head);
        head = head.next;
    }
    let current = stack.pop();
    head = current;
    while(stack.length > 0){
        current.next = stack.pop();
        current = current.next;
    }
    current.next = null;
    return head;
}

// 아이디어 3
function solution3(head) {
    if (head === null || head.next === null) return head;

    let reversed_list = solution3(head.next);
    head.next.next = head;
    head.next = null;
    return reversed_list;
}

// best
let reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

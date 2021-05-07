/**
 *  연결리스트의 각 자리의 숫자 하나하나가 연결 리스트의 노드로 구성되어 있다.
 *  이 숫자의 합을 구해야 한다.
 *  주어진 2개의 연결 리스트로 표현되는 양의 정수의 합의 결과를 연결리스트로 반환하라.
 *  예를 들어 1->2->3과 4->5->6이 주어졌다면, 5->7->9를 반환하면 된다.
 *
 *  제한사항
 *  1. 연결리스트는 양의 정수로 표현
 *  2. 1번째 노드는 가장 높은 자리의 숫자
 *  3. 주어진 두 연결 리스트는 무조건 값이 있다
 *  4. 0을 제외하고 0으로 시작하는 숫자는 없다. (0 -> 3 -> 3 과 같은 입력은 없다)
 *
 *  아이디어
 *  1. 스택
 *  1-1. 스택 2개를 생성한다
 *  1-2. 각 연결리스트(l1, l2)를 각각 순회하면서 노드 값을 스택에 넣어주자.
 *  1-3. 스택의 값을 하나씩 꺼내 자리수를 더해 나가도록 하자.
 *  더해진 각 값을 새로운 연결 리스트의 노드로 연결해주자.
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(2n)
 *
 *  2. 연결리스트 뒤집기
 *  2-1. 2개의 연결 리스트를 뒤집는다.
 *  2-2. 뒤집은 연결 리스트를 순회하며 각 자리수를 더한다. 각 자리 숫자를 더하면서 새 노드를 생성하고 연결한다.
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(2n)
 *
 *  3. 문자열 연산
 *  3-1. 각 연결 리스트를 순회하면서 숫자를 문자열로 전환하고 문자열에 숫자를 추가
 *  3-2. 두 문자열을 int()로 변환
 *  3-3. 정수를 다시 str()로 변환
 *  3-4. 각 자리를 접근하면서 연결 리스트를 구성
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(L + M), 변환된 문자열 저장
 *
 */

function solution(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    while (l1 != null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2 != null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = new ListNode(0);
    while (stack1.length || stack2.length) {
        let sum = 0;
        if(stack1.length) sum += stack1.pop();
        if(stack2.length) sum += stack2.pop();
        sum += carry.val;
        carry.val = sum%10;
        let head = new ListNode(Math.floor(sum/10));
        head.next = carry;
        carry = head;
    }
    return (carry.val === 0) ? carry.next : carry;
}


function solution2(l1, l2) {

    function reverse(head) {
        let prev = null;
        let curr = head;

        while(curr != null) {
            let next_temp = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next_temp;
        }
        return prev;
    }

    let r_l1 = reverse(l1);
    let r_l2 = reverse(l2);

    let res_head = null;

    let carry = 0;
    let sum = 0;
    while ( r_l1 != null || r_l2 != null )  {
        let num1 = 0;
        let num2 = 0;

        if (r_l1 != null) {
            num1 = r_l1.val;
            r_l1 = r_l1.next;
        }
        if (r_l2 != null) {
            num2 = r_l2.val;
            r_l2 = r_l2.next;
        }
        sum = num1 + num2 + carry;
        carry = Math.floor(sum / 10);
        sum = Math.round(sum % 10);

        let node = new ListNode(sum);
        if (res_head == null) {
            res_head = node;
        } else {
            let temp = res_head;
            res_head = node;
            node.next = temp;
        }
    }

    if (carry !== 0) {
        let node = new ListNode(carry);
        let temp = res_head;
        res_head = node;
        node.next = temp;
    }
    return res_head;
}


function solution3(l1, l2) {

}

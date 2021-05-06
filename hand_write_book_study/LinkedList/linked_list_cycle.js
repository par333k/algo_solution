/**
 *  주어진 연결 리스트가 순환을 가지는지 판단하는 프로그램을 작성해보자.
 *  순환이라 함은 특정 노드를 기점으로 이전 특정 노드로 돌아가 순환이 생기는 경우라고 보면된다.
 *  
 *  - 유명한 알고리즘 : 플로이드의 토끼와 거북이,
 *  2개의 연결리스트 포인터를 운영하며 해당 포인터의 속도차를 이용해 순환을 검출한다.
 *  순환이 아니라면 토끼가 연결 리스트에 빠르게 도착할 것이고 순환이라면 거북이와 만날 것이다.
 *  
 *  아이디어
 *  1. Brute-force
 *  1-1. 노드를 순회한다.
 *      - 순회 중 노드가 끝에 도달하거나 연결이 없다면 종료
 *      - 현재까지 순회 카운터를 기록
 *      - 노드를 처음부터 순회한다.(순회 카운터만큼)
 *          - 바깥 순회에서 선택된 노드와 비교해 2번 겹친다면 순환이 발생
 *          - 아니라면 순회를 종료
 *  시간 복잡도 : O(n^2)
 *  공간 복잡도 : O(1)
 *  
 *  2. Hash-table
 *  2-1. 노드를 순회한다.
 *      - 각 노드를 set으로 있는지 없는지 확인
 *      - 있다면 true를 반환
 *      - 없다면 set에 추가
 *  시간 복잡도 : O(n)
 *  공간 복잡도 : O(n), 해시 테이블에 최악의 경우 모든 노드를 저장.
 *  
 *  3. Two-pointer (플로이드의 토끼와 거북이)
 *  3-1. slow, fast 포인터는 head를 가리킨다.
 *  3-2. slow는 1번의 이동을 한다.
 *  3-3. fast는 2번의 이동을 한다.
 *  3-4. fast와 slow가 같아진다면 연결 리스트는 순환
 *  3-5. fast나 slow가 가리키는 노드가 None(Null)이면 순환이 없다.
 *  시간 복잡도 : O(n)
 *  공간 복잡도 : O(1)
 */

function ListNode(val) {
         this.val = val;
         this.next = null;
}

function LinkedList() {
     var _length = 0; 
     var _head = null; 
}

LinkedList.prototype.append = function(data) { 
    var node = new ListNode(data); 
    var curr; 
    if( this._head == null ) { 
        this._head = node; 
    } else { 
        curr = this._head; 

        while( curr.next ) { 
            curr = curr.next; 
        } 

        curr.next = node; 
    } 
    this._length ++; 
};

const head = new LinkedList();

head.append(3);
head.append(2);
head.append(0);
head.append(-4);  
  
console.log(head);
// linked cycle 예제 만들기 연습해야함

// idea 1
function solution(head) {
    let outer = head;
    let nodeCnt = 0;
    
    while (outer != null && outer.next != null) {
        outer = outer.next;
        nodeCnt += 1;
        
        let visit = nodeCnt;
        let inner = head;
        
        let matched = 0;
        while (visit > 0) {
            if (outer != inner) {
                inner = inner.next;
            }
            
            if (outer == inner) {
                matched += 1;
            }
            
            if (matched == 2) {
                return true;
            }
            
            visit -= 1;
        }
        
    }
    return false;
}

console.log(solution(head));

// idea 2;
function solution2(head) {
    let curr = head;
    let node_set = new Set();
    
    while(curr != null) {
        if(node_set.has(curr)) {
            return true;
        }
        node_set.add(curr);
        curr = curr.next;
    }
    
    return false;
}

// idea 3;
// best
function solution3(head) {
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {
            return true;
        }
        
    }
    return false;
}
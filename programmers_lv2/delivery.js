// https://programmers.co.kr/learn/courses/30/lessons/12978
// lv2 배달
// 못풀었다. 다익스트라 알고리즘, 우선순위 큐, 배열, Object에 대한 숙련도, 구현력 모두 모자라다.
// 훈련만이 살길
// 고통스럽다.. 빨리빨리 배워지지 않는게 힘들어..

const N = 5;
const road = [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
const K = 4

// result = 4;
function solution(N, road, K) {
    let answer = 0;
    // 다익스트라 알고리즘 사용을 위한 arr 배열 선언(1부터 사용하기 위해 N + 1)
    const arr = Array(N + 1).fill(Infinity);
    // 인접한 정점을 가지는 배열을 선언
    const adj = Array.from(Array(N + 1), () => new Array());

    // road로 주어진 edge들을 adj에 넣는다
    road.map(info => {
        let a = info[0];
        let b = info[1];
        let c = info[2];
        // a번에서 b번으로 가는 방향과 비용
        adj[a].push({to: b, weight: c});
        // b번에서 a번으로 가는 방향과 비용
        adj[b].push({to: a, weight: c});
    });

    // Node 배열을 만들고 첫 시작을 넣는다
    let Node = [{
        to: 1,
        weight: 0
    }];
    // 다익스트라 알고리즘 사용을 위한 배열의 인덱스 1번째를 0으로 초기화
    arr[1] = 0;

    (function() {
        // Node 배열에 아무것도 없을 때까지 돌린다
        while (Node.length) {
            // 출발 정점을 정한다
            let edge = Node.pop();
            adj[edge.to].map(next => {
                // 연결된 정점들의 arr 값을 봐서 현재 값과 현재 값 + weight의 값 중 작은 값을 선택
                if(arr[next.to] > arr[edge.to] + next.weight) {
                    arr[next.to] = arr[edge.to] + next.weight;
                    // 방문한 정점을 Node에 넣어준다
                    Node.push(next);
                }
            });
            // Node 배열을 내림차순으로 정렬한다(정점을 pop으로 뽑기 때문)
            Node.sort((a, b) => b[2] - a[2]);
        }
    })();

    // 다익스트라 배열에서 K 보다 방문비용(weight의 합)이 낮은 경우를 세어서 리턴
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= K) {
            answer++;
        }
    }

    return answer;
}

console.log(solution(N, road, K));
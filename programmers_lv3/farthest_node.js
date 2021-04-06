// https://programmers.co.kr/learn/courses/30/lessons/49189?language=javascript
// lv3 가장 먼 노드
// 다시 풀어야 함

const n = 6;
const edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];

// result = 3
function solution(n, edge) {
    // 1번 정점으로부터 가장 멀리 떨어진 정점들을 구해야한다.
    // 최단거리로 계산했을 때 가장 먼 정점들을 구해야함
    // BFS - 넓이 우선 순회, 이 문제에선 depth의 레벨이 곧 최단거리로 가는 간선의 숫자가 된다
    // 즉, 제일 밑에 있는 노드의 갯수를 구하면 된다.
    // 0뎁스(정점1)에서 1뎁스(정점2,3), 2뎁스(정점4,5,6) 으로 가는 것을 계산
    // 방문한 배열 1을 넣어주고
    // edge 배열을 줄여주는데, edge 배열 원소 중 방문한 정점과 연결된 간선은 제거해줘야함
    // 제거된 간선들은 다음 정점으로 출발하는 정보, 즉 다음레벨의 정점들의 배열이 되어야 함
    // 방문한 배열 안의 정점에 연결된 간선들을 제거한 edge 배열 길이 0
    // 다음 정점의 정보인 node 배열 길이가 0이면
    // 현재 방문한 노드가 1번에서 가장멀다
    // 반복하면서 edge 배열과 node 배열의 길이가 0이 아니면 방문한 정점인 visited 배열을 node 배열로 바꿔주면됨
    // 이 때 중복은 제거해야함.
    let answer = 0;
    // 1번 정점으로부터 시작, 최고 정점은 방문
    let visited = [1];
    while (true) {
        let node = [];
        for (let i = 0; i < edge.length; i++) {
            // 이미 둘 다 방문한 간선일 경우 edge 배열을 줄여준다
            if(visited.includes(edge[i][0]) && visited.includes(edge[i][1])) {
                edge.splice(i, 1);
                i--;
                continue;
            }
            // 한 쪽만 방문했을 경우 나머지 한 쪽을 방문해야할 정점에 넣어주고 edge 배열을 줄인다
            if (visited.includes(edge[i][0])) {
                node.push(edge[i][1]);
                edge.splice(i, 1);
                i--;
                continue;
            }
            if (visited.includes(edge[i][1])) {
                node.push(edge[i][0]);
                edge.splice(i, 1);
                i--;
                continue;
            }
        }
        // edge 배열이 없다는 것은 모든 배열을 방문했다는 것이고,
        // node 배열이 없다는 것음 다음에 갈 정점이 없다는 것
        // while 이 한 번 돌 때마다 BFS로 다음 방문할 연결된 정점이 생기기 때문에
        // 둘 다 없을 때 모두 방문 했고 마지막 방문한 정점들이 가장 먼 정점들
        // 따라서 중복을 제거한 visited 배열의 원소들 갯수가 제일 먼 정점이된다
        if(edge.length === 0 && node.length === 0) {
            answer = visited.length;
            break;
        }

        visited = [...new Set(node)];

    }
    return answer;
}

console.log(solution(n, edge));

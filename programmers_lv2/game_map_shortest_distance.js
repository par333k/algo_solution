// https://programmers.co.kr/learn/courses/30/lessons/1844?language=javascript
// lv2 게임 내 최단거리
// BFS 연습!

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];

// result = 11
function solution(maps) {
    let answer = 0;
    let rows = maps.length;
    let columns = maps[0].length;
    // 전부 벽이라고 가정하고 지나간 것을 체크하기 위한 맵
    let distance = Array(rows).fill().map(() => Array(columns).fill(0));
//    console.log(distance);
    distance[0][0] = 1;
    // 큐를 통해 bfs 구현, 큐가 다 사라지면 마지막에 도착함
    let queue = [];
    queue.push([0,0]);
    // set을 통해 방문여부를 문자열로 저장
    let visited = new Set();
    visited.add([0,0].toString());
//    for (let item of visited) console.log(item);
    // 동서남북 좌표로 이동이 가능한 좌표 x축 y축
    // x축 기준으로 오른쪽으로 가면 1, 왼쪽으로 가면 -1 (대각 맨 끝에 도착점이 있기 때문)
    // y축 기준으로 위로가면 -1, 아래로가면 1
    let dx = [-1,1,0,0];
    let dy = [0,0,-1,1];

    while (queue.length > 0) {
        let current = queue.shift();
        let row = current[0];
        let col = current[1];
        //       console.log(row, col);
        for(let i = 0; i < 4; i++) { // i는 동서남북 이동가능한 방향의 숫자
            // 0일때는 (-1, 0), 1일때는 (1, 0), 2일때는 (0, -1) 3일때는 (0, 1)
            let nextX = row + dx[i];
//            console.log(row, dx[i]);
            let nextY = col + dy[i];
//            console.log(col, dy[i]);
            // 다음으로 가는 위치의 좌표가 0보다 작거나 맨 끝위치를 넘어가면 아무것도 하지 않고 다른 방향으로 이동
            if(nextX < 0 || nextY < 0 || nextX >= rows || nextY >= columns) continue;
            // 해당 좌표를 방문한 적이 있거나 해당 좌표가 존재하지 않으면 아무것도 하지 않고 다른 방향으로 이동
            if(visited.has([nextX, nextY].toString()) || maps[nextX][nextY] == 0) continue;
            // 위 조건들을 피하면 방문한 좌표를 기록
            visited.add([nextX,nextY].toString());
            // 방문한 좌표의 현재위치에서 1을 더한 값을 다음 이동할 좌표에 덮어씌움
            // 첫 시작 위치가 1칸이므로 queue에서 뺀 현재 칸의 값은 1, 다음에 이동가능한 곳은 거리 1이 더해지는 것
            distance[nextX][nextY] = distance[row][col] + 1;
            // 이동한 현재 좌표를 queue에 다시 넣는다
            // 이 큐가 while을 통해 반복되는 동안 다 사라지면 끝에 도착한 것
            queue.push([nextX, nextY]);

        }
    }
    // 도달할 수 없었다면 -1 리턴
    if(distance[rows-1][columns-1] === 0) return -1;
    // 도달했다면 누적한 거리의 합을 리턴
    else return distance[rows-1][columns-1];

}

console.log(solution(maps));
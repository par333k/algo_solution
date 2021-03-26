// https://programmers.co.kr/learn/courses/30/lessons/43162?language=javascript
// lv3 네트워크

const n = 3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];

// result = 2;

function solution(n, computers) {
    let answer = 0;
    const visited = Array(computers.length).fill(false);

    const dfs = (idx) => {
        visited[idx] = true;

        for(let i = 0; i < computers.length; i++) {
            if(computers[idx][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    };

    for(let i = 0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i);
            answer += 1;
        }
    }
    return answer;
}

console.log(solution(n, computers));
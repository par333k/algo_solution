// https://programmers.co.kr/learn/courses/30/lessons/49994
// lv2 방문길이
// 혼자 못품 다시 해봐야함
// 좌표, 구현능력, dfs,bfs, 그래프 등에 너무 취약함

const dirs = "ULURRDLLU";

// result = 7;
function solution(dirs) {
    let answer = 0;
    const path = {};
    const location = { x: 0, y: 0 };

    for(let move of dirs) {
        let current = `${location.x}${location.y}`;

        switch(move) {
            case "U":
                if ( location.y + 1 <= 5) {
                    location.y += 1;
                }
                break;
            case "D":
                if ( location.y - 1 >= -5) {
                    location.y -= 1;
                }
                break;
            case "R":
                if ( location.x + 1 <= 5) {
                    location.x += 1;
                }
                break;
            case "L":
                if ( location.x - 1 >= -5) {
                    location.x -= 1;
                }
                break;
        }
        let moved = `${location.x}${location.y}`;

        if ( current === moved ) {
            continue;
        } else {
            const resultLocation = moved+' to '+current;
            const reverseLocation = current+' to '+moved;

            if ( path[resultLocation] !== 1 && path[reverseLocation] !== 1) path[resultLocation] = 1;

        }
    }
    answer = Object.keys(path).length;

    return answer;
}

console.log(solution(dirs));
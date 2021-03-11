// https://programmers.co.kr/learn/courses/30/lessons/12905#
// lv2 가장 큰 정사각형 찾기
// DP 연습

const board = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [0, 0, 1, 1, 1]];

// result = 9
function solution(board) {
    let answer = 0;
    // 정사각형의 속성 : 본인이 1일때, 좌상,상,좌 혹은 우상, 상 우에 각각의 1의 정사각형이 있어야 정사각형이 만들어짐
    // 오른쪽 원소를 확인할 경우 배열의 index를 벗어나는 경우가 생김
    // 그렇다면 2번째 행렬 원소부터 왼쪽에 1이 있는지 확인해서 값을 추가해줌
    // 이 때 누적되어야 하기 때문에 1씩 더하는게 아닌 좌상, 상, 좌의 값 중 최소값을 더해줘야함
    // 이유는 같은 정사각형이 여러개 겹칠 수 있어서 누적된 우하단의 값이 좌상,좌,상의 위치에선 각각 값이 다른 경우가 생김
    // 가장 작은 값이 현재 값 기준의 정사각형이 넓어지는 기준
    if(board.length === 1) {
        if(board[0].includes(1)) {
            answer = 1;
            return answer;
        }
    }

    if(board[0].length === 1) {
        for(let i = 0; i < board.length; i++){
            if (board[i][0] === 1) {
                answer = 1;
                return answer;
            }
        }
    }

    for(let i = 1; i < board.length; i++) {
        for (let j = 1; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                if(board[i-1][j] >= 1 && board[i-1][j-1] >= 1 && board[i][j-1] >= 1) {
                    board[i][j] = board[i][j] + Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]);
                }
            }

            if(answer < board[i][j]) {
                answer = board[i][j];
            }
        }
    }

    answer = answer**2;

    return answer;
}

console.log(solution(board));
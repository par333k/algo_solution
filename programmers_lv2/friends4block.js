// https://programmers.co.kr/learn/courses/30/lessons/17679
// lv2 프렌즈4블록
// 혼자 못풀었다.. 다시 첨부터 해볼것.

const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];
const m = 6;
const n = 6;

// result = 15;
function solution(m, n, board) {
    let answer = 0;
    board = board.map((v) => v.split(""));

    while (true) {
        let destroyArr = [];
        for (let i = 0; i < board.length - 1; i++) {
            for (let j = 0; j < board[i].length - 1; j++) {
                let now = board[i][j];
                if (now && now === board[i + 1][j] && now === board[i][j+1] && now === board[i+1][j+1]) {
                    destroyArr.push([i, j]);
                }
            }
        }

        if (destroyArr.length < 1) {
            return [].concat(...board).filter((v) => !v).length;
        }

        for (let i = 0; i < destroyArr.length; i++) {
            const col = destroyArr[i][0];
            const row = destroyArr[i][1];
            board[col][row] = 0;
            board[col][row + 1] = 0;
            board[col + 1][row] = 0;
            board[col + 1][row + 1] = 0;
        }

        // 이부분 잘 모르겠다..
        for (let i = board.length -1; i > 0; i--) {

            for (let j = 0; j < board[i].length; j++) {
                for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}

console.log(solution(m, n, board));

/**
 *  단어 찾기
 *  2차원 문자 배열과 단어 문자열이 주어지는데, 문자 배열에 인접한 문자의 조합 입력으로
 *  주어진 단어를 만들 수 있는지 확인해보자.
 *
 *  제한사항
 *  1. m x n 크기의 문자 2차원 배열
 *  2. 1 <= m <= 200~300, 1 <= n <= 200 ~ 300
 *  3. word의 길이는, 1 <= len(word) <= 10^3 ~ 10^4
 *
 *  아이디어
 *  1. Brute-force
 *  1-1. board 배열의 모든 요소를 순회한다.
 *  1-2. word[0]과 board[x][y] 요소가 같다면,
 *      - x, y위치의 문자와 word의 현재 문자와 같은지 확인
 *      - x, y가 board 크기를 벗어나는지 확인
 *      - 이미 방문한 위치인지 확인
 *      - board[x - 1][y]와 word의 다음 문자로 재귀호출
 *      - board[x + 1][y]와 word의 다음 문자로 재귀호출
 *      - board[x][y - 1]와 word의 다음 문자로 재귀호출
 *      - board[x][y + 1]와 word의 다음 문자로 재귀호출
 *  시간 복잡도: O(m * n * 4^문자열 길이)
 *  공간 복잡도: O(1)
 *  const board = [["A","C","B"],["G","O","G"],["I","J","D"]];
 */
// 못풀었다.. 2차원 배열과 행렬을 다루는 것에 너무 약함
const board = [["A","C","B"],["G","O","G"],["I","J","D"]];
const word = "AGIJ";

function solution(board, word) {
    // 상, 하, 좌, 우, x는 1차원 배열의 인덱스, y는 2차원 배열의 인덱스, x는 행, y는 열
    const direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    if (board.length === 0) return false;
    // 1차원 배열의 길이는 행, 행의 길이는 세로 길이.
    // 2차원 배열의 길이는 열, 열의 길이는 가로 길이.
    const height = board.length;
    const width = board[0].length;

    const search = (x, y, z) => {
        if(board[x][y] !== word[z]) {
            return false;
        }
        if(z === word.length -1) {
            return true;
        }

        board[x][y] = '.'; // 방문 표시

        for (const [dx, dy] of direction) {
            const i = x + dx;
            const j = y + dy;

            if (i >= 0 && i < height && j >= 0 && j < width) {
                if (search(i, j, z+1)) return true;
            }
        }

        board[x][y] = word[z]; //초기화
        return false;
    };

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (search(i, j, 0)) return true;
        }
    }

    return false;
};

console.log(solution(board, word));

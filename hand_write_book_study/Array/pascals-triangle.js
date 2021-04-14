/**
 * 파스칼의 삼각형은 수학의 이항 계수를 삼각형의 형태로 숫자를 배열한 구성을 말한다.
 * 파스칼의 삼각형은 처음 두 줄을 제외하고 새로 만들어지는 줄의 새로운 숫자는
 * 윗줄의 왼쪽 수와 오른쪽 수를 더해 만들어진다. 또한 제일 맨 첫 줄 하나의 숫자는 1이다.
 * 아랫 줄은 윗줄의 왼쪽 수와 오른쪽 수가 존재한다면 합하고,
 * 그렇지 않다면 그대로 다음 줄의 수를 구성한다.
 *
 * 제한사항
 * 1. 입력값은 양의 정수
 * 2. 반환값은 2차원 배열 혹은 리스트
 *
 * 아이디어
 * Brute-force
 * 1. 기반 리스트 생성
 * 2. 1번째 리스트 요소를 1로 초기화한다.
 * 3. 입력으로 주어진 행수(numRows)만큼 순회한다
 *  - 항상 행의 맨 앞과 맨 뒤의 값은 1이다.
 *  - 순회하면서 해당 줄을 생성하기 위해서는 이전행의 값을 참조하여 더하거나 그대로 사용한다
 * 시간복잡도: O(n^2)
 * 공간복잡도: O(1)
*/
// test case 1
const numRows = 4;
// test case 2
// const numRow = 0;

// idea 1
function solution(numRows) {
    let pascal = [];
    if (numRows <= 0) return pascal;
    pascal.push([1]);

    for (let i = 1; i < numRows; i++) {
        let prev_length = pascal[i-1].length;
        let current_list = [];

        for (let j = 0; j < prev_length + 1; j++) {
            let num = 1;
            if (j != 0 && j != prev_length) {
                num = pascal[i - 1][j - 1] + pascal[i - 1][j];
            }
            console.log(num);
            current_list.push(num);
        }
        console.log(current_list);
        pascal.push(current_list);
    }
    return pascal;
}

console.log(solution(numRows));


// 개량된 코드
function solution2(numRows) {
    let pascal = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
}

console.log(solution2(numRows));


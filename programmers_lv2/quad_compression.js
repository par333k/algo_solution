// https://programmers.co.kr/learn/courses/30/lessons/68936
// lv2 쿼드압축 후 개수 세기

const arr = [[1,1,0,0],[1,0,0,0],[1,0,0,1],[1,1,1,1]];

// result = [4, 9];
function solution(arr) {
    // 모두 같을 경우 true, 아닐 경우 false
    // false라면 4등분하여 다시 반복
    // 시작값으로부터 해당 사각형의 값을 체크
    // 어차피 1개면 반복문이 안돌아서 재귀를 호출하지 않고 리턴함
    // 모두 다 같다면 그 중 한개의 숫자가 0인지 1인지를 확인해서 갯수를 세어준다
    let answer = [];
    let count = [0,0];

    const square = ((temp, size, start) => {
        const x = start[0];
        const y = start[1];
        const first = temp[x][y];
        // 양 변이 같으므로 반씩 쪼개면 됨
        const divide = size / 2;
        // 모든 수가 같은지 체크
        let same = true;
        // 정사각형 사이즈가 1이면 어차피 무조건 true
        for (let i = x; i < x + size; i++) {
            for (let j = y; j < y + size; j++) {
                if (first !== temp[i][j]) {
                    same = false;
                    break;
                }
            }
            if (!same) break;
        }

        if (same) {
            if (first === 0) count[0] = count[0]+1 ;
            if (first === 1) count[1] = count[1]+1 ;
            return;
        } else {
            // 4등분 해야하니까 0,0 에서부터 하나, x축에서 쪼갠 길이만큼부터 하나, y축에서 쪼갠 길이만큼부터 하나, 마지막 사각형
            square(arr, divide, start);
            square(arr, divide, [x + divide, y])
            square(arr, divide, [x, y + divide])
            square(arr, divide, [x + divide, y + divide])
            return;
        }


    });

    // 재귀 호출 함수
    square(arr, arr.length, [0, 0]);

    return count;
}

console.log(solution(arr));

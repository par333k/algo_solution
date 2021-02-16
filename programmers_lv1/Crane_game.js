// https://programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임

function solution(board, moves) {
    let result = [];
    let count = 0;
    for(let i = 0; i < moves.length; i++) {
        // console.log('row: ', i);
        let order = moves[i];
        let row = board[order - 1];

        for (let j = board.length - 1; j >= 0; j--) {
            // console.log('row before:', row);
            let col = row[j];
            console.log(col);
            if (col === 0) {
                // console.log('col === 0')
                continue;
            } else {
                // console.log('col ===', col);
                row[j] = 0;
                result.unshift(col);
                break;
            }
        }
        console.log('row after: ', row);
    }

    for (let i = 0; i < result.length; i++) {
        if (i === result.length - 1) break;
        if (result[i] === result[i + 1]) {
            count += 2;
            result[i] = 0;
            result[i + 1] = 0;
            continue;
        }
    }
    return count;
}
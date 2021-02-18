// https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
// lv1 K번째 수

const array = [1,5,2,6,3,7,4];
const commands = [[2,5,3],[4,4,1],[1,7,3]];

//result = [5,6,3]
function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i ++) {
        let startIdx = commands[i][0] -1;
        let endIdx = commands[i][1] - 1;
        let resultIdx = commands[i][2]-1;


        if(commands[i][0] == commands[i][1]) {
            if (commands[i][0] > 0) {
                let temp = array[commands[i][0] -1];
                if (resultIdx == 0 ) {
                    answer.push(temp);
                }
            }

        } else if (commands[i][0] < commands[i][1]){

            let tempArr = array.slice(startIdx, endIdx + 1);
            console.log(tempArr)

            tempArr.sort((a, b) => a - b);
            console.log(tempArr);
            if (tempArr.length -1 >= resultIdx && resultIdx > -1) {
                answer.push(tempArr[resultIdx]);
            }

            console.log(answer)
        }

    }
    return answer;
}

console.log(solution(array, commands));
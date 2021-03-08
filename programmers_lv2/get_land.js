// https://programmers.co.kr/learn/courses/30/lessons/12913?language=javascript
// lv2 땅따먹기

// 단순히 생각하면 위에서부터 일일히 인덱스를 비교하여 누적합을 모으겠다고 생각할 수 있음
// 그럴경우 코드가 너무 길어짐. 수학적 규칙성을 잘 생각해야함
// 원하는 최대값은 결국 두 행의 각 원소의 합 중에서 최대값이 필요함
// 이 때의 조건이 같은 열끼리는 합할 수 없으므로
// n+1행의 원소를 같은 열이 아닌 n행의 원소와 합하여(같은 인덱스가아닌)
// 최대값을 n+1 행의 원소로 저장하고, 다시 이것을 n행으로 고려하여
// 반복하게되면 결국 마지막 행의 최대값이 우리가 원하는 누적의 합이 됨

const land = [[1,2,3,5],[5,6,7,8],[4,3,2,1]];

// result = 16
function solution(land) {
    let answer = 0;
    
    for(let i = 0; i < land.length -1; i++) {
        land[i+1] = sumrow(land[i], land[i+1]);
    }
    
    answer = land[land.length - 1].reduce((pre, cur) => {
        return pre > cur ? pre:cur;
    })
    
    return answer;
}

function sumrow(now, next) {
    let arr = [];
    let returnArr = new Array().fill();
    for(let i = 0; i < next.length; i++) {
        for (let j = 0; j < now.length; j++) {
            if(i !== j) {
                arr.push(now[j] + next[i]);
            }
        }
        let maxNum = arr.reduce((pre, cur) => {
            return pre > cur ? pre:cur;
        });
        returnArr[i] = maxNum;
        arr = [];
    }
    return returnArr;
}

console.log(solution(land));


// https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
// lv1 체육복 문제

const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];
// result 5
function solution(n, lost, reserve) {
    let answer = 0;
    let count = 0;
    let tempLost = [];
    let tempReserve = [];
    for (let i = 0; i < reserve.length; i++) {
        //n,n-1,n+1
        // 여분 있는 학생중 도둑맞은 학생과 일치할 경우 빌려줄 수 없다
        for(let j = 0; j < lost.length; j++) {
            if (reserve[i] == lost[j]) {
                reserve[i] = '';
                lost[j] = '';
            }
        }

        if(reserve[i] != '') {
            // 여벌이 있어 남에게 빌려줄 수 있는 학생은 tempReserve 에
            tempReserve.push(reserve[i]);
        }

    }

    for (let g = 0; g < lost.length; g++) {
        if(lost[g] != '') {
            // 체육복을 빌리지 못한 학생은 tempLost 에
            tempLost.push(lost[g]);
        }
    }

    for (let k = 0; k < tempReserve.length; k++) {
        for (let h = 0; h < tempLost.length; h++) {
            // 여분이 있는 체육복 학생 번호의 앞번호와 뒷번호
            let left = tempReserve[k] - 1;
            let right = tempReserve[k] + 1;
            // 여벌 체육복이 있는 학생은 앞 뒤 학생에게만 빌려줄 수 있다.
            if(left == tempLost[h] && left != 0) {
                tempLost[h] = '';
                count++;
                break;
            }

            if(right == tempLost[h] && left != 0) {
                tempLost[h] = '';
                count++;
                break;
            }

        }
    }
    console.log(tempReserve);
    console.log(tempLost.length);
    console.log(count);
    // n - lost.length + count
    //count는 빌려준 숫자, tempLost.length는 못 빌린 학생들 숫자.
    answer = (n - tempLost.length) + count;

    return answer;
}

console.log(solution(n, lost, reserve));


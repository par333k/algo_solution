// https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
// lv1 콜라츠 추측

const num = 16

// result = 4
function solution(num) {
    let answer = 0;
    let count = 0;
    let temp = num;
    while(temp != 1) {
        if(temp%2 == 0) {
            temp = temp/2
        } else if(temp%2 != 0) {
            temp = (temp*3) + 1;
        }
        count++

        if (count >= 500) {
            break;
        }
    }

    if(count >= 500) {
        answer = -1;
    } else {
        answer = count;
    }

    return answer;
}

console.log(solution(num))
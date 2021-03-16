// https://programmers.co.kr/learn/courses/30/lessons/12935
// lv1 제일 작은 수 제거하기

const arr = [4,3,2,1];

// result = [4,3,2];
function solution(arr) {
    let answer = [];
    let array = JSON.parse(JSON.stringify(arr));
    arr.sort((a, b) => {
        return b - a;
    })

    if(arr.length > 1) {
        let temp = arr.pop();
        for (let i = 0; i < array.length; i++) {
            if(array[i] == temp) {
                array.splice(i, 1);
            }
        }

        return array;
    } else {
        answer.push(-1);
        return answer;
    }

}

console.log(solution(arr));
// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
// lv1 하샤드 수

const x = 13

// result = false;
function solution(x) {
    let answer = true;
    let tempstring = x.toString();
    let temp = [];
    let sum = 0;
    for(let i = 0; i < tempstring.length; i++) {
        let char = tempstring.charAt(i);
        temp.push(char);
    }

    for (let j = 0; j < temp.length; j++) {
        sum += Number(temp[j]);
    }

    if(x%sum==0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}

console.log(solution(x));
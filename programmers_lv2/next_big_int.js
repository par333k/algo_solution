// https://programmers.co.kr/learn/courses/30/lessons/12911?language=javascript
// lv2 다음 큰 숫자

const n = 78;

// result = 83;
function solution(n) {
    let answer = 0;
    let radix2 = n.toString(2);
    let count = 0;

    for (let j = 0; j < radix2.length; j++) {
        if(radix2[j] === '1') {
            count++;
        }
    }

    let count2 = 0;
    for(let i = n+1; i <= 1000000; i++) {
        let temp = i.toString(2);
        for(let j = 0; j < temp.length; j++) {
            if(temp[j] === '1') {
                count2++
            }
        }
        if(count === count2) {
            answer = i;
            break;
        } else {
            count2 = 0;
        }
    }
    return answer;
}

console.log(solution(n));

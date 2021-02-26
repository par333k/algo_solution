// https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
// lv1 문자열 내림차순으로 배치하기

const s = "Zbcdefg";

// result = "gfedcbZ";
function solution(s) {
    let answer = '';
    let left = [];
    let right = [];
    for (let i = 0; i < s.length; i++) {
        // String.charAt() 문자열의 특정 인덱스에 위치하는 유니코드 단일문자를 반환
        if(s.charAt(i) == s.charAt(i).toLowerCase()) {
            left.push(s.charAt(i));
        } else if (s.charAt(i) == s.charAt(i).toUpperCase()) {
            right.push(s.charAt(i))
        }
    }
    // a가 b보다 크면 -1  : a가 먼저옴  b가 a보다 크면 1 : b가 먼저옴
    left.sort((a , b) => {
        if(a > b) {
            return -1
        } else if (b > a) {
            return 1
        }
    });
    console.log(left);
    right.sort((a , b) => {
        if(a > b) {
            return -1
        } else if (b > a) {
            return 1
        }
    });
    console.log(right);
    for (let j = 0; j < left.length; j++) {
        answer += left[j];
    }

    for (let k = 0; k < right.length; k++) {
        answer += right[k]
    }

    return answer;
}

console.log(solution(s));

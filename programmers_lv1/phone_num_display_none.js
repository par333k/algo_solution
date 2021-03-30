// https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
// lv1 핸드폰 번호 가리기

const phone_number = "01033334444";

// result = "*******4444";
function solution(phone_number) {
    let answer = '';
    let temp = phone_number.substr(phone_number.length - 4, phone_number.length -1);
    if (phone_number.length == 4) {
        answer = phone_number;
    } else {
        phone_number = phone_number.substr(0, phone_number.length -4);
        phone_number = phone_number.replace(/[0-9]/g, '*');
        answer = phone_number + temp;
    }

    return answer;
}

console.log(solution(phone_number));
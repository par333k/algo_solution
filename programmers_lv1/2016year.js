// https://programmers.co.kr/learn/courses/30/lessons/12901
// lv1 2016년 문제

const a = 5;
const b = 24;
//result = "TUE"
function solution(a, b) {
    //20160101 == 금요일 20160108 == 금요일
    let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayname = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let index = a - 1;
    let days = 0;
    for(let i = 0; i < index; i++) {
        days += month[i];
    }
    let firstday = days%7;
    let firstdayName = dayname[firstday];
    console.log(firstdayName)
    //firstdayName = a월의 1일 요일
    let resultday = b%7;
    let nowIdx = dayname.indexOf(firstdayName);
    let answerIdx = nowIdx+resultday -1

    if(answerIdx > 6) {
        answerIdx = answerIdx - 7;
    }

    let answer = dayname[answerIdx];
    return answer;
}

console.log(solution(a, b));

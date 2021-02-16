// https://programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
// lv2 구명보트 문제

const people = [70,80,50];
const limit = 100;
// result = 3;
function solution(people, limit) {
    let tempLimit = limit;
    let count = 0;
    let sortedPeople = people.sort((a,b) => { return a - b });
    // 제일 무거운 사람과 제일 작은 사람의 합을 넣을 수 있으면 넣고 count ++
    // 안되면 제일 무거운 사람만 넣고 count++
    // 배열이 0이 되면 종료
    while(sortedPeople.length > 0) {
        const sum = sortedPeople[0] + sortedPeople[sortedPeople.length - 1];
        if (tempLimit >= sum) {
            sortedPeople.pop();
            sortedPeople.shift();
            count++
            tempLimit = limit;
        } else {
            sortedPeople.pop();
            count++
            tempLimit = limit;
        }
    }
    return count;
}

console.log(solution(people, limit));
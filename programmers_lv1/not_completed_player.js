// https://programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
    let answer = '';
    participant.sort();
    completion.sort();

    for(let i = 0; i < completion.length; i++) {
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    if (answer != '') return answer;
    else return participant[participant.length-1];
}

console.log(solution(participant, completion));
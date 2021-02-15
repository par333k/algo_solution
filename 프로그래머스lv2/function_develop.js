// https://programmers.co.kr/learn/courses/30/lessons/42586
// 프로그래머스 lv2 기능개발 문제

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];

function solution(progresses, speeds) {
    let answer = [];
    let maxday = 0;
    let count = 0;
    let tempArr = [];
    let idx = 0;

    for(let i = 0; i < progresses.length; i++) {
        let remainder = 100 - progresses[i];

        let completeday = remainder/speeds[i];

        if (completeday < 1) {
            completeday = 1;
        }
        completeday = Math.ceil(completeday);
        tempArr.push(completeday);
    }

//    console.log(tempArr)
    maxday = tempArr[0];
    while(tempArr.length > 0) {
//        console.log(maxday)
        if(maxday >= tempArr[idx]) {
            //           console.log('임시배열원소',tempArr[idx])
            count++;
            if(tempArr.length == 1) {
                answer.push(count);
            }
            tempArr.shift();
            idx--;
//            console.log('임시배열',tempArr);
        }

        if(maxday < tempArr[idx]) {
            //           console.log('들어오니',tempArr[idx]);
            maxday = tempArr[idx];
//            console.log('카운트',count)
            answer.push(count);
            count = 0;
            idx = -1;
        }
        idx++;
        console.log(answer);
    }

    return answer;
}

solution(progresses, speeds);
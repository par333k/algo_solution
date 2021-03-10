// https://programmers.co.kr/learn/courses/30/lessons/17683?language=javascript
// lv2 [3차] 방금 그곡

const musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
const m = "ABC";

// result = "WORLD"
function solution(m, musicinfos) {
    let answer = [];
    let musicArr = [];
    let musicName = [];
    let times = [];
    m = m.replace(/C#/gi,"H");
    m = m.replace(/D#/gi,"I");
    m = m.replace(/F#/gi,"J");
    m = m.replace(/G#/gi,"K");
    m = m.replace(/A#/gi,"L");
    // 0. 배열 원소를 쉼표 단위로 분리
    for (let i = 0; i < musicinfos.length; i++) {
        let str = musicinfos[i].split(",");
        str[3] = str[3].replace(/C#/gi,"H");
        str[3] = str[3].replace(/D#/gi,"I");
        str[3] = str[3].replace(/F#/gi,"J");
        str[3] = str[3].replace(/G#/gi,"K");
        str[3] = str[3].replace(/A#/gi,"L");
        // 1. 재생시간을 분단위로 계산한다
        let startHour = str[0].replace(/\:/g,"").substring(0,2);
        let endHour = str[1].replace(/\:/g,"").substring(0,2);
//        console.log(startHour, endHour);
        let startMin = str[0].replace(/\:/g,"").substring(2,4);
        let endMin = str[1].replace(/\:/g,"").substring(2,4);
//        console.log(startMin, endMin);
        let playtime = ((endHour - startHour)*60) + (endMin - startMin);
        //       console.log(playtime);

        // 2. 곡의 재생시간만큼길이의 음을 만든다
        if(playtime >= str[3].length) {
            let repeat = Math.floor((playtime)/str[3].length);
            let dum = (playtime)%str[3].length;
            let music = '';
            for(let j = 1; j <= repeat; j++) {
                music += str[3];
            }
            music += str[3].substring(0, dum);
            musicArr.push(music);
        } else {
            let music = str[3].substring(0, playtime);
            musicArr.push(music);
        }
        musicName.push(str[2]);
        times.push(playtime);
    }
    let count = 0;
    let name = '(None)';

    for(let i = 0; i < musicArr.length; i++) {
        if(musicArr[i].includes(m)) {
            answer.push([musicName[i], times[i]]);
        }
    }
    if(answer.length === 0) {
        return name;
    }
    if(answer.length > 1) {
        for(let i  = 0; i < answer.length - 1; i++) {
            if(answer[i][1] >= answer[i+1][1]) {
                name = answer[i][0];
            } else {
                name = answer[i+1][0];
            }
        }
    } else if (answer.length = 1) {
        name = answer[0][0];
    }


    return name;
}

console.log(solution(m,musicinfos));
// https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
// lv1 가운데 글자 가져오기

const s = "abcde"
//result = 'c'
function solution(s) {
    var answer = '';
    //짝수면 나누기 2 와 나누기 2+1 위치
    //홀수면 나누기 2 다음거
    if(s.length%2 == 0) {
        //짝수
        let location = s.length/2;
        answer = s.slice(location-1, location+1);
        
    } else {
        //홀수
        let location = parseInt(s.length / 2)
        answer = s[location];        
    }
    return answer;
}

console.log(solution(s));

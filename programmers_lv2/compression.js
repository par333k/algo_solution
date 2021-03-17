// https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript
// lv2 압축
// 재귀로만 생각하지마.. 재귀는 반복문으로 모두 치환가능

const msg = "KAKAO";
// result = [11, 1, 27, 15];
function solution(msg) {
    let answer = [];
    let dictionaly = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X',
        'Y','Z'];

    for (let i = 0; i < msg.length; i) {
        let j = 1;
        // 사전에서 현재 문자열의 i번부터 j번까지의 문자열을 찾는다
        // 0,1 이 있다면 두번째..j번째까지 있는지를 찾기위해 j를 올려준다
        // 이 때 i와 j의 합은 msg의 길이보다 적어야 한다(j를 증가시키면 msg를 넘어가니까)
        // j를 올리면서 해당 문자열이 없거나 문자열 길이를 넘어서면 탈출한다
        // 즉, 문자열이 없을 때까지 찾기 위해 j를 올려서 문자열을 순회한다.
        while (dictionaly.indexOf(msg.substring(i, i + j)) !== -1 && i + j <= msg.length) {
            j++;
        }
        // 탈출했다는건 j까지의 문자열이 서적에 없거나 길이를 넘어섰다는 뜻
        console.log(msg.substring(i, i+j));
        // j까지의 문자열을 사전에 새로 넣어준다
        dictionaly.push(msg.substring(i, i + j));
        // 색인번호를 넣는다. 이 때 탈출한 문자열보다 하나 짧은 문자가 사전에서 매칭된 문자이므로 해당 문자의 색인을 찾아 반환한다.
        answer.push(dictionaly.indexOf(msg.substring(i, i + j - 1)) + 1);
        // 시작지점을 매칭된 문자 다음 문자부터 확인하게 한다
        i += j - 1;
        console.log(i);
   //     console.log(dictionaly)
    }
    console.log(msg);
    return answer;
}

console.log(solution(msg));
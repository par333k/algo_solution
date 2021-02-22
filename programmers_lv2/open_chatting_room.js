// https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
// lv2 오픈채팅방
// 접근법은 좋았는데, map 자료구조를 잘 활용하는 법에 익숙하지 않아서 시간복잡도에서 계속 문제가 됨
// map은 순회해서 값을 가져올 필요 없이 키 값만 있으면 get 메서드를 통해 가져오는게 훨씬 빠르고
// split을 일일히 반복문 안에서 하기보단 애시당초 2차원 배열을 활용하면 훨씬 쉬움.
// 2차원 배열과 map 사용법 익숙해져야함

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

// result = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."];
function solution(record) {
    let tempArr = record.map((str) => str.split(" "));
    let uidArr = new Map();
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i].length === 3) {
            uidArr.set(tempArr[i][1], tempArr[i][2]);
        }
    }
    let answer = [];
    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i][0] === 'Enter') {
            answer.push(uidArr.get(tempArr[i][1])+'님이 들어왔습니다.');
        } else if (tempArr[i][0]  === 'Leave') {
            answer.push(uidArr.get(tempArr[i][1])+'님이 나갔습니다.');
        }
    }
    return answer;
}

console.log(solution(record));

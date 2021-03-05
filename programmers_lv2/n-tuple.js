// https://programmers.co.kr/learn/courses/30/lessons/64065?language=javascript
// lv2 튜플

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

// result = [3, 2, 4, 1];
function solution(s) {
    let answer = [];
    // 집합의 사이즈가 1인 애가 맨 첫번째
    // 2인 애에서 1번째 원소를 빼면 걔가 두번째
    // 3인 애에서 2번원소를 빼면 걔가 3번째
    // n 사이즈 집합에서 n-1 사이즈 집합을 빼면 그 원소가 n번째 튜플의 원소
    // 문자열을 배열로 변경
    // 작은것 부터 정렬한 2차원 배열을 1차원 배열로
    // 중복되는 숫자를 순서를 지켜서 제거
    // set은 순서 보장
    // {, } 싹 배열의 [ ]로 바꿔주고 쌍따옴표 제거
    // [] 형태로 된 문자열은 JSON.parse를 이용해 배열 객체로 바꿔줌
    let newArr = s.replace(/{/g,'[').replace(/}/g,']').replace(/"/g,'');
    newArr = JSON.parse(newArr);
    newArr.sort((a, b) => {return a.length - b.length});
    let temp = [];
    for(let i = 0; i < newArr.length; i++) {
        for(let j = 0; j < newArr[i].length; j++) {
            temp.push(newArr[i][j]);
        }
    }
    answer = [...new Set(temp)];
    return answer;
}

console.log(solution(s));
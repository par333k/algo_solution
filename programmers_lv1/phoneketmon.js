// https://programmers.co.kr/learn/courses/30/lessons/1845
// lv1 폰켓몬

const nums = [3,3,3,2,2,2]

// result = 2;
function solution(nums) {
    let answer = 0;
    // 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택
    // 중복을 제거한 원소의 갯수가 곧 선택의 종류
    let choicePoke = parseInt(nums.length)/2;
    const seted = new Set(nums);
    const arrayPoke = Array.from(seted);
    if(arrayPoke.length >= choicePoke) {
        answer = choicePoke;
    } else {
        answer = arrayPoke.length;
    }

    return answer;
}

console.log(solution(nums));

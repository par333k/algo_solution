/**
 * 부분집합
 * 고유한 정수의 집합으로 배열이 주어지면 가능한 모든 부분집합을 반환하자.
 * 중복된 부분집합은 허용하지 않는다.
 * 입력으로 [1,2,3]이 주어진다면,
 * 결과로 [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]을 반환한다.
 *
 * 제한사항
 * 1. 정수형 배열
 * 2. 반환값은 2차원 정수형 배열
 * 3. 입력 배열 요소는 중복된 값을 허용하지 않음
 *
 * 아이디어
 * 1. Brute-force
 * 1-1. index는 0, 비어 있는 배열(subset)을 선언한다.
 * 1-2. 호출된 현재 부분배열(subset)을 결과 배열에 저장한다.
 * 1-3. index부터 입력 배열 길이만큼 순회한다
 *  - subset에 현재 입력 배열의 요소를 추가한다.
 *  - index를 1 증가시키고 재귀 호출한다.
 *  - subset에 재귀 복귀 후 마지막 요소를 제거하고 순회 진행한다.
 * 시간 복잡도: O(n * 2^n)
 * 공간 복잡도: O(n * 2^n)
 */

const nums = [1,2,3];

function solution(nums, res, sub, index) {
    if(sub.length > nums.length) {
        return
    }

    res.push([...sub])

    for(let i = index; i < nums.length; i++) {
        sub.push(nums[i]);
        solution(nums, res, sub, i + 1);
        sub.pop();
    }

    return res;
}

console.log(solution(nums, [], [], 0));

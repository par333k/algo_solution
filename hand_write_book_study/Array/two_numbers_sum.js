/**
 * 문제 : 주어진 정수형 배열에서 2개의 숫자를 선택하여 더한 값이 특정 목푯값(target)을 만들 때,
 * 그 선택한 2개의 정수가 있는 배열의 인덱스를 반환하는 프로그램을 작성하라. 입력값으로 주어지는 배열에는
 * 정확히 하나의 정답이 존재하며, 같은 요소의 값을 중복해서 사용할 수 없다.
 *
 * 알고리즘 캔버스 문제풀이
 *
 * 제한사항 : 문제의 제한사항을 기록한다
 * 1. 정수형 배열
 * 2. 두 수의 합이 정수형을 초과할 수 있는가?
 *  - 문제에 언급이 없다.
 * 3. 두 수의 합 값이 배열 내에 무조건 존재하는가?
 *  -무조건 정확히 하나의 해결책이 존재한다.
 * 4. 중복된 요소의 값을 2번 이상 사용하여 결괏값을 만들어서는 안된다
 *
 * 아이디어 : 문제에 대한 해결법을 접근하는 아이디어를 기록한다
 * 1. Brutal-force
 * 배열의 모든 요소의 조합을 찾는다.
 *  - 2중 루프를 구성하여, n*(n-1)로 계산한다
 * 해당 조합으로 목푯값과 비교하여 같다면 해당루프를 종료하고 각 값을 가진 인덱스를 반환한다
 * 시간복잡도 : O(n^2)
 * 공간복잡도 : O(1)
 *
 * 2. Hash-Table
 * 해시테이블을 구성한다.
 *  - 키 값으로는 배열의 요소, 값으로는 요소의 인덱스로 구성
 * 각 요소를 순회한다.
 *  - 목푯값 - 현재 요소 = 다른 요소
 *  - 해시 테이블에서 다른 요소의 값을 찾는다.
 *  - 만약 다른 요소가 해시 테이블에 있다면, 현재 요소의 인덱스와 해시 테이블의 값(인덱스)을 반환한다.
 *  - 다른 요소가 없다면, 현재 요소를 해시 테이블의 키값으로 넣고 인덱스를 해시 테이블의 값 항목으로 추가한다.
 * 시간복잡도 : O(n) - 1번의 순회로 원하는 값을 찾을 수 있다
 * 공간복잡도 : O(n) - 해시테이블을 생성하여 최대로 모든 요소(n)을 담아야 한다.
 *
 *  3. 테스트 케이스
 * 해당 문제상황의 기본적인 조건을 테스트 할 테스트 케이스를 작성한다
 * case 1: nums = [2,7,8,11], target = 9
*/

const nums = [2,3,8,9,11,12];
const target = 13;

// idea 1번
function number_sum(nums, target) {
    let answer = [];
    for(let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                answer.push(i);
                answer.push(j);
            }
        }
    }
    return answer;
}

console.log(number_sum(nums, target));

// idea 2번
function number_sum_hash(nums, target) {
    const table = {};

    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        if(table[nums[i]] >= 0 && table[nums[i]] != i) {
            console.log(nums[i], i);
            return [table[nums[i]], i]
        }
        table[value] = i;
        console.log(table);
    }
}

console.log(number_sum_hash(nums, target));

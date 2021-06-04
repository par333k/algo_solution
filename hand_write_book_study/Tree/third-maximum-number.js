/**
 *  3번째 큰 수
 *  배열에서 3번째로 큰 수를 찾아 반환하도록 하자.
 *  만약 3 번째로 큰 수가 없다면 가장 큰 수를 반환하면 된다.
 *
 *  제한사항
 *  1. 정수형 배열
 *  2. 배열은 비어 있지 않다.
 *  3. 요소가 3개 이상이라면 3번째 큰 수를 반환
 *  4. 요소가 3개 미만이라면 가장 큰 수를 반환
 *  5. 같은 숫자는 카운팅 하지 않는다.
 *
 *  아이디어
 *  - 정렬
 *  1. 배열을 역순으로 정렬한다.
 *  2. 가장 큰 수를 변수에 저장.
 *  3. 배열을 순회한다.
 *      - 해시 테이블(set)을 이용해 중복된 숫자는 다음으로 넘어간다.
 *      - 중복된 숫자를 제외하고 3번째 숫자라면 순회 종료
 *  4. 순회 과정에서 중복된 숫자를 제외하고 3번째 숫자를 찾지 못했다면,
 *     2번에서 저장한 가장 큰 수가 반환.
 *  시간 복잡도: O(nlogn)
 *  공간 복잡도: O(n)
 *
 *  - 우선순위 큐
 *  1. 우선순위 큐(최대 힙 사용)를 생성
 *  2. 각 요소를 순회하면서 중복을 제외하고 최대 힙을 구성
 *  3. 최대 힙 내에 요소가 2개 이하라면 맨 앞에 있는 숫자를 반환
 *  4. 최대 힙 내에 요소가 3개 이상이라면, 힙에서 3번 요소를 꺼내 3번째 요소 반환
 *  시간 복잡도: O(nlogn)
 *  공간 복잡도: O(n)
 */

const nums = [3,2,1];

function solution(nums) {
    nums.sort((a, b) => { return b - a })
    console.log(nums);
    const numSet = new Set(nums);

    nums = [...numSet];
    console.log(nums);
    if(nums.length > 2) {
        return nums[2];
    } else {
        return nums[0];
    }
}



/**
 * @param {number[]} nums
 * @return {number}
 */
// DP
const thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    if (nums.length < 3) return Math.max(...nums);

    let max = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < second && nums[i] > third) third = nums[i];

        if (nums[i] < max && nums[i] > second) {
            third = second;
            second = nums[i];
        }

        if (nums[i] > max) {
            third = second;
            second = max;
            max = nums[i];
        }
    }

    return third;
};


//priority queue
const thirdMaxQueue = function(nums, pos = 3) {
    let arr = new Array(pos).fill(Number.NEGATIVE_INFINITY);
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (arr.includes(n)) {
            continue;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < n) {
                arr.splice(i, 0, n);
                arr.pop();
                break;
            }
        }
    }
    arr = arr.filter(n => n > Number.NEGATIVE_INFINITY);
    return arr.length === pos ? arr.pop() : arr[0];
};

/**
 * 빠진 숫자 찾기
 * 주어진 정수형 배열은 0 ~ n 까지 숫자를 담고 있는데 이 중 빠진 숫자를 찾아보자
 * 배열의 값은 0에서 시작하여 n까지 n + 1개의 요소를 가질 수 있지만, 배열의 크기는
 * n으로 이 숫자 중 하나는 빠져 있다는 의미다.
 * 예를 들어 nums = [3, 1, 0]라면 빠진 숫자는 2다.
 *
 * 제한사항
 * 1. 배열은 n 크기의 정수형 배열이다
 * 2. 0 에서 n 사이의 숫자만 갖고 있다.
 * 3. 예외적인 경우는 없다고 가정한다.
 *
 * 아이디어
 * 1. 정렬
 * 1-1. 배열을 정렬한다.
 * 1-2. 1번째 요소가 0이 아니라면 0을 반환한다.
 * 1-3. 마지막 요소가 n이 아니라면 n을 반환한다.
 * 1-4. 배열을 1번 인덱스부터 n - 1 까지 순회한다.
 *  - 현재 요소가 이전 요소에 1만큼 큰 수가 아니라면 현재 인덱스를 반환한다.
 * 시간 복잡도: O(nlogn)
 * 공간 복잡도: O(1)
 *
 * 2. Hash Set
 * 2-1. 배열의 모든 값을 해시 셋(Hash Set)에 넣는다.
 * 2-2. O에서 n까지 순회한다.
 *  - 해시 셋에 없는 값을 반호나한다.
 * 시간복잡도: O(n)
 * 공간복잡도: O(n)
 *
 * 3. 비트 연산
 * 3-1. 변수에 n의 값으로 초기화한다.
 * 3-2. 배열을 순회한다.
 *  - 변수에 현재 인덱스와 해당 값을 다 같이 XOR 한다.
 * 3-3. 변숫값을 반환한다
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 *
 * 4. 합의 차
 * 4-1. 0에서 n 까지의 합을 구한다.
 * 4-2. 배열 요소의 총합을 구한다.
 * 4-3. (0에서 n까지 합) - (배열 요소의 총합)을 반환한다.
 * 시간 복잡도: O(n)
 * 공간 복잡도: O(1)
 *
 * Best. 인덱스 활용하기
 * 1. 주어진 배열보다 1칸 큰 (하나를 잃어버렸기 때문에) 배열을 -1로 다 채워서 생성
 * 2. 주어진 배열을 순회하며 해당 요소를 인덱스로 갖는 -1의 임시 배열의 값을 요솟값으로 바꿔준다
 * 3. 남은 -1 값의 인덱스가 잃어버린 숫자이다.
 */

const nums = [3, 1, 0];
const n = 3;

// idea 1
function solution(nums, n) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    if(nums[0] != 0) return 0;
    if(nums[nums.length - 1] != n) return n;
    for (let i = 1; i < n; i++) {
        if ((nums[i] - nums[i-1]) !== 1) {
            return i;
        }
    }
}

//console.log(solution(nums, n));

// idea 2
function solution2(nums) {
    const hash = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!hash.has(i)) {
            return i;
        }
    }
}

console.log(solution2(nums))


const nums2 = [1, 3, 0, 4];
// idea 3
function solution3(nums2) {
    let missing = nums2.length;

    for (let i = 0; i < nums2.length; i++) {
        missing = missing ^ i ^ nums2[i];
    }

    return missing;
}

console.log(solution3(nums2))

// idea 4
function solution4(nums2) {
    let sum = (nums2.length*(nums2.length + 1)) / 2;
    let arrSum = 0;

    for (let i = 0; i < nums2.length; i++) {
        arrSum += nums2[i];
    }

    return sum - arrSum;
}

console.log(solution4(nums2));

// Best
function bestSolve(nums) {
    // construct array of size n+1, to leave a spot for the missing element.
    // Assign each val to -1 so we can see which position was not filled
    // O(n)
    const res = new Array(nums.length+1).fill(-1);

    // "sort" the elements by assigning to the array based on val
    // O(n)
    for(const num of nums) {
        res[num] = num;
    }

    // the remaining -1 index is the missing value
    // O(n-1)
    return res.indexOf(-1);
}

console.log(bestSolve(nums));

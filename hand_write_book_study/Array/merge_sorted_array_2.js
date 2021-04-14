/**
 * 정렬된 배열 nums1과 nums2가 주어지고, 각각의 크기는 m과 n이다.
 * 정렬을 유지하면서 nums1 배열부터 채워나가 nums2까지 확장해보자.
 * 추가 조건 :
 *  - nums1에 병합된 m + n 크기만큼의 공간은 있지 않다.
 *  - nums1 배열에 nums1과 nums2의 모든 요소를 작은 수부터 채워나가고
 *  - nums2에는 나머지를 정렬을 유지하며 넣도록 하자
 *  - 추가 배열 할당 없이 문제를 해결해야 한다 (공간 복잡도 O(1))
 *
 * 제한사항
 * 1. 추가 배열 공간 할당이 없다.
 * 2. nums1과 nums2의 크기는 제한이 없다.
 * 3. nums1과 nums2의 요소는 정렬되어 있다.
 *
 * 아이디어
 * Brute-force
 * 1. nums1을 순회한다.
 * 2. nums1의 요소와 nums2의 첫 요소와의 크기를 비교한다
 * 3. nums1의 요소가 nums2의 첫 요소보다 크다면,
 *  - nums2의 1번째 요소를 nums1의 비교했던 요소와 교체하고
 *  변경된 nums2의 1번째 요소와 다른 요소를 비교하면서 재정렬한다.
 * 4. 두 배열이 계속 정렬된 채로 nums1의 순회가 끝날 때까지 비교 및 교환 작업을 진행한다.
 *
 */

// test case 1
// const nums1 = [1,3,5,7];
// const nums2 = [2,4,8];
// result nums1 = [1,2,3,4];
// test case 2
// const nums1 = [10];
// const nums2 = [2,3];
// result
// test case 3
const nums1 = [2, 8, 10];
const nums2 = [5];

function solution(nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] > nums2[0]) {
            let temp = nums1[i];
            nums1[i] = nums2[0];
            nums2[0] = temp;

            nums2.sort((a, b) => a - b);
        }
    }

    return nums1;
}

console.log(solution(nums1, nums2));

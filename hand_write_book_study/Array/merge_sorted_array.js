/**
 * 주어진 정렬된 두 배열(nums1, nums2)을 정렬을 유지하면서 병합해보자.
 * 추가 설명 :
 * nums1과 nums2의 각각의 크기는 m과 n개의 요소로 초기화되어 있다.
 * nums1은 nums1과 nums2를 병합하기에 충분한 크기로 할당되어 있다. (m + n 개)
 *
 * 제한사항
 * 1. 주어진 두 배열은 정렬되어 있다.
 * 2. nums1의 요소는 m 개이다.
 * 3. nums2의 요소는 n 개이다.
 * 4. nums1의 배열의 크기는 m + n 개이다.
 *
 * 아이디어
 * 1. 정렬
 * 1-1. 두 배열을 합친다 (먼저 병합한다)
 * 1-2. 정렬 메서드로 다시 정렬한다
 * 시간복잡도 : O(NlogN)
 * 공간복잡도 : O(N)
 * 2. 비교 및 삽입
 * 2-1. nums1 을 위한 인덱스 포인터 i, nums1의 마지막 요소를 가리킴(m - 1)
 * 2-2. nums2 를 위한 인덱스 포인터 j, nums2의 마지막 요소를 가리킴(n - 1)
 * 2-3. 삽입을 위한 포인터 k, nums1 공간 마지막을 가리킴 (m + n - 1)
 * 2-4. 현재 i와 j의 값을 비교한다.
 * 2-5. 비교하여 큰 쪽의 값을 k의 위치에 추가한다.
 *  - k는 1 감소한다.
 *  - 비교하여 큰 쪽 인덱스 값이 k에 추가되었으므로 큰 쪽의 인덱스는 1 감소한다.
 * 2-6. i, j중 하나라도 0보다 작아지면 비교를 중지한다.
 * 2-7. j가 아직 0보다 크다면 nums1을 가리키고 있는 k값을 감소시키면서 nums1에 삽입한다.
 * 시간복잡도 : O(N + M)
 * 공간복잡도 : O(1)
 *
 * 배열 관련 풀이에서는 꼭 배열이 0인 경우를 생각해야 한다.
 */

const nums1 = [1,3,7];
const nums2 = [4,5,6];
const m = 3;
const n = 3
// idea 1
function solution(nums1, nums2, m, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b);
    console.log(nums1);
}
solution(nums1, nums2, m, n);

// idea 2
function solution2(nums1, nums2, m, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j -= 1;
        } else {
            nums1[k] = nums1[i];
            i -= 1;
        }
        k -= 1;
    }

    while(j >= 0) {
        nums1[k] = nums2[j];
        k -= 1;
        j -= 1;
    }
    console.log(nums1);
}


solution2(nums1, nums2, m, n);

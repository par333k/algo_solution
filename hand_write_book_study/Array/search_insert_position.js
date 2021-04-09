/**
 * 정렬된 배열과 목푯값이 주어지는데 목푯값을 찾는다면 배열의 해당 인덱스를 반환하고,
 * 찾지 못한다면 정렬된 배열이 되도록 목표값이 배열에 들어가야 하는 인덱스를 구하라
 * 예를들어, 입력값이 nums = [1,2,3,4,5], 목표값은 3이면 출력값은 2이고
 * nums [1, 4, 5, 6]이고 목표값이 3이면 출력값은 1이다
 * 문제는 실제로 배열을 수정하는 것이 아니라, 해당 위치를 반환해야 하는 것이다.
 *
 * 1. 제한사항
 * 주어진 배열은 정렬된 정수형 배열이다
 * 반환하는 값은 배열의 길이보다 무조건 작다
 * 목푯값은 정수형 데이터로 주어진다
 * 배열의 값은 정수로 음수, 양수, 0을 포함한다
 * 배열은 정렬되어 있다.
 * 배열의 크기는 매우매우 클 수도 있다(제한이 없다)
 * 목푯값이 배열안에 없고 배열의 인덱스보다 클 경우 배열의 총 길이를 반환해야하고
 * 목푯값이 배열에서 가장 작은 값일 경우에는 0번 인덱스를 반환해야한다.
 *
 * 2. 아이디어
 * 2-1 전체탐색
 * 배열을 앞부터 순회한다
 * 목푯값보다 큰 숫자가 나오면 바로 전 인덱스를 반환한다
 * 목푯값과 같은 숫자가 있으면 해당 인덱스를 반환한다.
 * 시간복잡도: O(N)
 * 공간복잡도: O(1)
 * 2-2 이진탐색
 * 정렬되어 있으므로 배열의 길이의 중간값을 찾는다.
 * 중간값보다 목푯값이 큰지 작은지 판단한다
 * 목푯값이 포함되는 범위의 배열의 중간값을 다시 찾는다
 * 요소를 찾는다면 해당 인덱스를 반환한다
 * 없다면 마지막으로 접근했던 낮은 인덱스의 값을 반환한다.
 * 시간복잡도: O(logN)
 * 공간복잡도: O(1)
 *
 * 3. 테스트 케이스
 * nums = [1,3,5,6] , target = 0
 * nums = [1,3,5,6] , target = 100
 */

const nums = [1,3,5,6];
const target = 7;

// idea 1 전체탐색

function solution(nums, target) {
    let answer = 0;
    if (nums[nums.length - 1] < target) return nums.length;
    if (nums[0] > target) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (target >= nums[i]) {
            answer = i;
            break;
        }
    }

    return answer;
}
console.log(solution(nums, target));

// idea 2 이진탐색

function solution2(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let middle = Math.ceil((high + low) / 2);

        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return low;
}

console.log(solution2(nums, target));

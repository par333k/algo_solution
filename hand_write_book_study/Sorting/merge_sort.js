/**
 *  병합정렬
 *  분할 정복 접근을 기반으로 복잡한 문제를 해결할 때 사용한다
 *  거품정렬이나 삽입정렬에 비해 높은 효율을 보인다.
 *  분할 정복은 기본적으로 문제를 작게 만들어 해결하고, 해결된 결과를
 *  다음 하위 문제로 전달 후 전체 문제를 해결하려고 시도하는 것이다.
 *  이를 위해 재귀를 이용한다. 재귀는 분할 정복이 필요한 문제를 해결 가능한
 *  하위 문제로 쪼갤 수 있는 방법을 제공한다.
 */

const arr = [8,2,6,4,5];

function merge_sort(arr) {
    const length = arr.length;
    if (length < 2) {
        return arr;
    }
    let midIndex = parseInt(length/2);
    let left = merge_sort(arr.slice(0, midIndex));
    let right = merge_sort(arr.slice(midIndex));
    return merge(left, right);
}

function merge(left, right) {
    const leftLength = left.length;
    const rightLength = right.length;

    let result = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (result.length < leftLength + rightLength) {
        if (left[leftIdx] <= right[rightIdx]) {
            result.push(left[leftIdx])
            leftIdx += 1;
        } else {
            result.push(right[rightIdx])
            rightIdx += 1;
        }

        if (rightIdx === rightLength) {
        //    result.push(left.slice(leftIdx));
            result = [...result, ...left.slice(leftIdx)];
            break;
        }

        if (leftIdx === leftLength) {
        //    result.push(right.slice(rightIdx));
            result = [...result, ...right.slice(rightIdx)];
            break;
        }
    }
    return result;
}

console.log(merge_sort(arr));


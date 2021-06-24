/**
 *   거품 정렬 구현하기
 *   순회를 끝까지 하지 않고 정렬이 다 되었다면 순회를 멈추는 조건
 *   시간복잡도는 최악/평균 모두 O(n^2)정도.
 *   이미 정렬된 배열을 정렬하는 경우는 O(n)
 *   시간복잡도가 높아서 바람직하지는 않다.
 */


const arr = [8,2,6,4,5];

function bubble_sort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        let done_sort = true;
        for (let j = 0; j < length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                done_sort = false
            }
        }
        if(done_sort) {
            break;
        }
    }
    return arr;
}

console.log(bubble_sort(arr));

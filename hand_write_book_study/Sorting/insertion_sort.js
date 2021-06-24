/**
 *  삽입 정렬
 *  거품 정렬과 마찬가지로 평균적인 시간복잡도가 높다 O(n^2)
 *  이미 정렬된 것에는 O(n)이다
 *  작은 데이터 셋에서는 다른 정렬보다 평균적으로 좋은 성능을 가진다
 *  Java, 파이썬, C++ 의 최근 버전들에서는 내장 정렬함수에 있어서
 *  작은 데이터 셋에 있어서는 삽입 정렬을 진행한다.
 *  Timsort 방식의 경우 2018년 이후의 V8 엔진(JS)에서도 지원하는데
 *  이 경우 작은 데이터셋들로 나눠 삽입정렬 후 해당 데이터 묶음들을 병합정렬 하는 식으로 처리한다.
 */

const arr = [8,2,6,4,5];

function insertion_sort(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let key_item = arr[i];
        let j = i - 1;

        while( j >= 0 && arr[j] > key_item) {
            arr[j + 1] = arr[j];
            j -= 1
        }
        arr[j + 1] = key_item;
    }
    return arr;
}

console.log(insertion_sort(arr));

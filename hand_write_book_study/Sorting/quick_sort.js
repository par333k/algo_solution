/**
 *  퀵 정렬
 *  병합 정렬과 비슷하게 분할 정복 방식을 이용한다.
 *  다른 점이 있다면 입력 리스트를 두 리스트로 나눌 때
 *  한 쪽은 특정 값보다 작은 값만 모으고 다른 하나는 특정 값보다 큰 값만 모은다.
 *  이를 재귀적으로 완전히 정렬될 때 까지 진행한다.
 *  특정 값을 퀵 정렬에서 비펏이라고 부르는데, 피벗을 결정하는 방식에 따라 성능 차이가 발생하기도 한다.
 *  입력 리스트를 나누는 것을 파티셔닝이라고 부른다. 분할할 때마다 피벗을 선택하여 두 부류(작은 값-low, 큰 값-high)로 나누는 작업을 한다.
 *  피벗 값이 마지막 라스트 요소일 경우 최악인 O(n^2)의 시간복잡도가 된다.
 *  따라서 무작위로 피벗을 결정해 최악을 최소화하거나 중간 값을 찾아 low / high 분배를 하면 안정적으로 O(nlogn)의 시간 복잡도를 가진다.
 */
const arr = [8,2,6,4,5];
function quick_sort(arr) {
    let length = arr.length;
    if(length < 2) return arr;

    let low = [], same = [], high = [];
    let pivot = arr[getRandomInt(0, length)];
    for (let item of arr) {
        if(item < pivot) {
            low.push(item);
        } else if ( item === pivot) {
            same.push(item);
        } else if (item > pivot) {
            high.push(item);
        }
    }
    return quick_sort(low) + same + quick_sort(high)
}

function getRandomInt(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

console.log(quick_sort(arr));

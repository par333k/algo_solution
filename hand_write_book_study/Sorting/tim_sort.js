/**
 *  팀 정렬
 *  삽입 정렬 + 병합 정렬
 *  삽입 정렬은 작은 크기의 리스트에서 더 빠르기 때문에 리스트를 작은 크기로 쪼개어
 *  삽입 정렬 후 병합의 병합 부분을 채용해 정렬된 리스트를 합치도록 한다.
 *  삽입 정렬의 비교 연산을 줄이기 위해 이진 탐색으로 요소 위치 탐색을 진행한다.
 *  팀 정렬에서는 Run이라는 용어를 통해 쪼갠 리스트를 표현한다. 리스트는 보통 64나 32 정도로 구성한다
 *  해당 크기의 리스트가 이진탐색에 적합하다.
 *  팀 정렬의 경우 전체 원소의 개수를 NN이라 할 때, minrun의 크기를 min(N, 2^5 ∼ 2^6)로 정의한다.
 *  고정된 수로 정의하지 않는 이유는 더 느려지는 경우도 있기 때문이다. 예를 들어 NN은 1088, minrun은 32일 경우
 *  전체 run의 개수는 최대 1088/32=34=2^5+2가 된다. 이 경우 2개씩 병합하는 Merge sort의 특성상 2의 거듭제곱이
 *  아니기에 minrun이 34이고 run의 개수가 32=2^5인 경우보다 더 많은 시간이 걸린다.
 *  따라서 팀 정렬에서는 run의 개수가 22의 거듭제곱이 되도록 유동적으로 minrun 값을 정하여 사용한다.
 *  병합하는 과정에서는 Galloping이라는 최적화 방법을 사용한다.
 *  https://d2.naver.com/helloworld/0315536 참고
 *
 *  팀 정렬은 최악의 시간복잡도가 O(nlogn)이고 최선의 경우 O(N)의 복잡도를 가지면서도
 *  스테이블 정렬이라는 장점이 있다. 그리고 병합 정렬에 비해 적은 메모리를 사용한다.
*/

// 정식 팀 정렬보다 간소화된 팀 정렬 구현

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

function binary_search(arr, key, start, end) {
    if(end - start <= 1) {
        if(arr[start] > key) {
            return start - 1;
        } else {
            return start;
        }
    }

    let mid = parseInt((start + end) / 2);

    if(arr[mid] < key) {
        return binary_search(arr, key, mid, end);
    } else if(arr[mid] > key) {
        return binary_search(arr, key, start, mid);
    } else {
        return mid;
    }
}

function insertion_sort(arr, run_s, run_e) {
    if( run_e === null) {
        run_e = arr.length - 1;
    }

    for (let i = run_s + 1; i < run_e + 1; i++) {
        let v = arr[i];
        let pos = binary_search(arr, v, run_s, i) + 1;
        for (let k = i; k < pos; i--) {
            arr[k] = arr[k-1];
        }
        arr[pos] = v;
    }
}

function tim_sort(arr) {
    let min_run = 32;
    let length = arr.length;

    for(let i = 0; i < length; i += min_run) {
        insertion_sort(arr, i, Math.min((i + min_run - 1), length - 1))
    }
    let size = min_run;

    while(size > length) {
        for(let i = 0; i < length; i += size*2) {
            let mid = i + size - 1;
            let end = Math.min((i + size*2 - 1), (length - 1))
            let merged = merge(arr.slice(i, mid), arr.slice(mid, end));
            let temp = arr.slice(i, i + merged.length);
            temp = merged;
        }
        size *= 2;
    }
    return arr;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}


const arr = (length = 0) => Array.from({ length }, (_, i) => getRandomInt(0, 100));
console.log(tim_sort(arr(100)));

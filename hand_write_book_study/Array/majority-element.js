/**
 *  배열에서 다수의 요소 찾기
 * 정수형 배열이 주어졌을 때 다수의 요소를 찾는다. 다수의 요소는 배열 내에서  floor(n/2)를 초과하여
 * 나타나는 요소를 말한다. 예를 들어 배열 요소 총개수가 9개라면 n/2는 4.5다.
 * 결국 5번 이상 나타나는 요소를 찾으면 된다. 배열은 항상 1개 이상의 요소를 가지고 있으며
 * 다수의 수가 무조건 하나 존재한다고 가정하자.
 * 입력값이 [2, 1, 2] 라면 다수의 요소는 2가 된다.
 *
 *  제한사항
 * 정수형 배열.
 * 배열은 1개 이상의 요소를 지닌다.
 * 다수의 수는 무조건 하나 존재한다.
 *
 *  아이디어
 *  1. Brute force
 *  1-1. 배열을 순회한다.
 *  1-2. 각 배열의 요소를 다른 모든 요소와 비교하여 배열에 몇 개가 들어있는지 파악한다.
 *  1-3. 개수를 세면서 다수의 수 조건에 맞는 숫자가 있으면 해당 숫자를 반환한다.
 *  시간복잡도: O(n^2)
 *  공간복잡도: O(1)
 *
 *  2. Hash Table
 *  2-1. 해시 테이블에서 키 항목으로는 배열의 요소로 하고 값 항목으로는 횟수를 지정한다.
 *  2-2. 배열을 순회한다.
 *  2-3. 배열을 순회하면서 해당 요소를 해시 테이블에서 찾는다.
 *      - 값이 있다면 해당 요소를 키값으로 하는 값 항목을 꺼내 1을 더해 업데이트 한다.
 *      - 값이 없다면, 해당 요소를 키 항목으로 두고 1의 값으로 추가한다.
 *  2-4. 값을 업데이트 하고 다수의 수 조건에 맞는 숫자를 반환한다.
 *  시간복잡도: O(n)
 *  공간복잡도: O(n) - 최악의 경우 요소만큼 해시테이블이 만들어져야 한다.
 *
 *  3. sorted
 *  3-1. 배열을 정렬한다.
 *  3-2. 가운데 수를 반환한다.
 *  시간복잡도: O(nlogn)
 *  공간복잡도: O(1)
 */

//const arr = [3,2,1,3,1,3,3,4,3];
//const arr = [6,5,5];
const arr = [3,2,3];
// idea 1
function solution(arr) {
    let temp = 0;
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (temp < count) {
            temp = count;
            answer = arr[i];
        }
    }
    return answer;
}

console.log(solution(arr));

// idea 2
function solution2(arr) {
    const middle = Math.floor((arr.length / 2));
    const table = {}
    for (let i = 0; i < arr.length; i++) {
        if (table[arr[i]]) {
            table[arr[i]] = table[arr[i]] + 1;
        } else {
            table[arr[i]] = 1;
        }
        if (table[arr[i]] > middle) return arr[i];
    }
    return -1;
}

console.log(solution2(arr));

// idea3
function solution3(arr) {
    const middle = Math.floor((arr.length / 2));
    arr.sort((a,b) => a - b);
    return arr[middle];
}

console.log(solution3(arr));

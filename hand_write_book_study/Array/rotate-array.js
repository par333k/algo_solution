/**
 *  배열의 회전
 *  입력으로 정수형 배열과 k 값이 주어지면, 각 요소를 우측으로 k 번 이동 및 회전을 해보자.
 *  k는 양의 정수 값이다.
 *  예를 들어 nums 배열에 [1, 2, 3, 4]가 있고, k가 1이라면 요소는 우측으로 1칸씩 이동 및 회전하여 [4,1,2,3]이 된다.
 * 
 *  제한사항
 *  1. 정수형 배열
 *  2. k 값은 양의 정수
 * 
 *  아이디어
 *  1. Brute-force
 *  1-1. k 번만큼 순회한다.
 *  1-2. 배열의 요소를 1칸씩 우측으로 이동 및 회전시킨다.
 *  시간 복잡도 : O(n * k)
 *  공간 복잡도 : O(1)
 *  2. 임시 배열
 *  2-1. 입력과 같은 크기의 임시 배열(temp)을 생성한다.
 *  2-2. nums 배열을 순회한다.
 *      - temp 배열에 nums의 요소를 k 만큼 이동 및 회전 시킨 위치에 값을 삽입한다.
 *  2-3. 임시 배열을 순회한다.
 *      - temp 배열의 요소를 nums 배열에 같은 인덱스의 값을 복사한다.
 *  시간 복잡도 : O(n)
 *  공간 복잡도 : O(n)  
 *  3-1. 모든 요소가 한 번씩 교환이 될 떄까지 배열을 순회한다
 *  3-2. 요소를 k 만큼 이동 및 저장한다
 *      - 이동한 위치의 이전 요소는 저장한다.
 *      - 저장한 요소는 다음 k 만큼 이동하여 넣는다.
 *      - 시작한 요소까지 값을 이동시키면 해당 순회를 종료한다.
 *      - 이동시킬 때마다 카운트한다
 *      - 다음 요소를 선택하고 다시 2번의 내용을 반복한다.
 *  시간 복잡도 : O(n)
 *  공간 복잡도 : O(1)
 *  4. 3번 뒤집기
 *  4-1. 전체 숫자를 뒤집는다
 *  4-2. 처음 K 만큼까지 숫자를 뒤집는다.
 *  4-3. 이전에 뒤집은 숫자 다음(n - k) 부터 마지막(n) 까지 뒤집는다
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(1)
 * 
 *  엣지케이스
 *  nums = [1,2];
 *  k = 3
 */

const nums = [1,2,3,4];
const k = 2;
// const nums = [1,2];
// const k = 3;

// idea 1
function solution(nums, k) {
    for (let i = 0; i < k; i++) {
        let prev = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            let temp = nums[j];
            nums[j] = prev;
            prev = temp;
        }
    }
    console.log(nums);
} 

// solution(nums, k);


// idea 2
function solution2(nums, k) {
    let temp = new Array(nums.length).fill(0);
    
    for (let i = 0; i < nums.length; i++) {
        temp[(i + k) % nums.length] = nums[i];
    //    console.log(temp);
    }
    return temp;
    
}

// console.log(solution2(nums, k));

// idea 3
function solution3(nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count >= nums.length) {
            break;
        }

        let current_idx = i;
        let prev_elem = nums[i];

        while (true) {
            let next_idx = (current_idx + k) % nums.length;
            let temp = nums[next_idx];
            nums[next_idx] = prev_elem;
            prev_elem = temp;

            current_idx = next_idx;
            count += 1
            console.log(nums, prev_elem, next_idx);
            if (current_idx === i) {
                break;
            }
        }
    }
    console.log(nums);
}

// solution3(nums, k);

// idea 4
function solution4(nums, k) {
    k = k % nums.length;
    nums.reverse();
    let leftArr = nums.slice(0, k);
    leftArr.reverse();
//    console.log(leftArr, nums);
    let rightArr = nums.slice(k, nums.length);
//    console.log(rightArr);
    rightArr.reverse();

    const result = [...leftArr, ...rightArr];
    return result;
}

// console.log(solution4(nums, k));

// Best 
function bestSolve(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    
    let reverse = function(i, j){
    
        while(i < j){
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
   } // suppose  ----->---> 
    
   reverse(0, nums.length-1); // reverse   <--<------
   reverse(0, k-1) // reverse first part ---><----
   reverse(k, nums.length-1)// reverse second part --->----->
}
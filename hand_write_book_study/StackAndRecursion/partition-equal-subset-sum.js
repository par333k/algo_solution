/**
 *  배열의 두 부분집합의 최소 차이 만들기
 *  양의 정수만 포함하는 비어 있지 않은 배열 번호가 주어지면
 *  두 하위 집합의 요소 합계가 같도록 배열을 두 하위 집합으로 분할 할 수 있는지 확인합니다
 *  예를 들어 [3,2,7,4,1]이 주어지면 부분집합의 합이 같은 경우가 있는지 확인합니다.
 *
 *  아이디어
 *  1. 전체 합에서 특정 부분집합의 합을 합치면 나머지 부분집합과의 차가 일어난다. '두 부분집합'이 포인트
 *  2. 모든 부분집합을 구하고 해당 부분집합의 합과 나머지 합의 차가 가장 작은 것을 찾으면 된다.
 */
const array = [3,2,7,4,2];

function solution(array) {
    // array의 전체 합 필요
    // 부분집합은 어떻게 구할까? dfs!
    // 합과 차가 같은 경우가 있다면 true
    const answer = [];
    let maxSum = 0;
    array.forEach((v) => {
        maxSum += v;
    })
    console.log(maxSum);

    if(maxSum % 2 === 1) {
        return false;
    }

    const dfs = (start = 0, arr = []) => {
        answer.push(arr);
        for (let i = start; i < array.length; i++) {
            dfs(i + 1, [...arr, array[i]])
        }
    }
    dfs();

    for(let i = 0; i < answer.length; i ++) {
        let sum = 0;
        for (let k = 0; k < answer[i].length; k++) {
            sum += answer[i][k];
        }
        console.log(sum, (maxSum - sum));
        if (sum === (maxSum - sum)) {
            return true;
        }
    }

    return false;
}

console.log(solution(array));


const nums = [3,2,7,4,2];

let canPartition = function (nums) {
    let sum = nums.reduce((acc, cur) => acc + cur);
    if (sum % 2 === 1) {
        return false;
    }
    sum /= 2;
    let memo = new Map();
    console.log(sum, '섬');
    return dfs(nums, sum, 0, memo);
    // T.C: O()
    // S.C: O(M*N)
};

const dfs = (nums, sum, idx, memo) => {
    console.log(sum, 'dfs', nums, idx, memo);
    if (sum === 0) {
        return true;
    }
    if (sum < 0 || idx === nums.length) {
        return false;
    }
    if (memo.has(`${idx}-${sum}`)) {
        return memo.get(`${idx}-${sum}`);
    }
    let res =
        dfs(nums, sum - nums[idx], idx + 1, memo) || dfs(nums, sum, idx + 1, memo);
    memo.set(`${idx}-${sum}`, res);
    return res;
};

console.log(canPartition(nums));


let canPartition2 = function(nums) {
    let sum = 0;
    for(let e of nums) sum += e;
    if(sum % 2) return false;
    let arr = new Array(nums.length+1);
    for(let a = 0; a < arr.length; a++){
        arr[a] = new Array((sum/2) + 1).fill(false);
    }
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[0].length; j++){
            if(i == 0) arr[i][j] = false;
            if(j == 0) arr[i][j] = true;
        }
    }
    for(let i = 1; i< arr.length; i++){
        for(let j = 1; j< arr[0].length; j++){
            if(nums[i-1] <= j){
                arr[i][j] = arr[i-1][j - nums[i-1]] || arr[i-1][j];
            }else{
                arr[i][j] = arr[i-1][j];
            }
        }
    }
    return arr[nums.length][sum/2];
};

console.log(canPartition2(nums));


/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canPartitionDP = function(nums) {
    let sum = nums.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    let half = sum / 2; // 소수점이 없으므로 나누는 것이 좋다.

    // 이제 우리의 목표는 적어도 하나의 하위 배열이 'half'값과 같은 합을 갖는지 찾는 것입니다.
    // 하위 배열의 나머지 절반이 동일한 값을 가져야만 true이다.

    let dp = [];

    // Base cases
    dp[0] = true;

    for (let index = 0; index < nums.length; ++ index) {
        let num = nums[index];
        for (let i = half; i >= num; -- i) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[half] || false;
};

console.log(canPartitionDP(nums));

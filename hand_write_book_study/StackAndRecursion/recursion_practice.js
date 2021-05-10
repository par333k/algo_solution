// 모든 숫자의 조합 구하기
// 배열로 주어진 숫자의 모든 요소에 대한 조합을 모두 구하려면
// 요소를 선택하여 집합에 넣거나 요소를 선택하지 않고 집합을 만들거나 하여
// 모든 조합을 찾아가는 과정이다.

let nums = [1,2];

const subsets = (nums) => {
    const res = [];

    const dfs = (start = 0, arr = []) => {
        console.log(res);
        res.push(arr);

        //if (arr.length === nums) return; 해도되고 안써도 된다. 속도는 조금더 좋을듯

        for (let i = start; i < nums.length; i++) {
            dfs(i + 1, [...arr, nums[i]]);
        }
    };
    dfs();

    return res;
};

console.log(subsets(nums));
// 순서는 [], [[], [1]], [[],[1],[1,2]], [[], [1], [1,2], [2]]
// 반복문 안에서 dfs를 호출, [1,2]를 arr에 전달하고 나면 그 다음 for문은 i가 nums.length를 넘어서 호출없이 종료
// 그렇다면 아까 [[],[1]] 때 반복문을 하면서 arr = [] 일때 nums[1]이었던 [[],[2]]가 마지막으로추가
// 반복문이 종료되면서 결국 res는 [[],[1],[1,2],[2]]로 저장되고 해당 자료를 리턴


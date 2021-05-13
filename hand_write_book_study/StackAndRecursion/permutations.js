/**
 *  모든 문자열 치환
 *  입력으로 주어진 문자열의 가능한 치환을 모두 출력해보자
 *
 */

const nums = [1,2,3];

function dfs(nums, path, used, res) {
    console.log(nums, path, used, res);
    if (path.length == nums.length) {
        // 깊은 사본을 만듭니다. 그렇지 않을 경우 동일한 목록이 계속 추가됩니다.
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        // 사용한 숫자는 스킵한다
        if (used[i]) continue;
        // 순열에 문자를 추가하고, 사용된 문자로 표시한다.
        path.push(nums[i]);
        used[i] = true;
        dfs(nums, path, used, res);
        // 순열에서 문자를 제거하고 사용하지 않은 문자로 표시한다.
        path.pop();
        used[i] = false;
    }
}

function solution(nums) {
    let answer = [];
    dfs(nums, [], Array(nums.length).fill(false), answer);
    return answer;
}

solution(nums);


// 재귀
function solution2(nums) {
    return nums.reduce((result, num) => {
        return result.reduce((permutations, permutation) => {
            permutation.push(num);
            for (let i = permutation.length - 1; i; i--) {
                permutations.push([...permutation])
                permutation[i] = permutation[i - 1];
                permutation[i - 1] = num;
            }
            permutations.push(permutation);
            return permutations;
        }, [])
    }, [[]])
}

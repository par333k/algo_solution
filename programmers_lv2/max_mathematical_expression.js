// https://programmers.co.kr/learn/courses/30/lessons/67257
// lv2 수식 최대화

// 아이디어는 맞게 끌어냈는데 코드화에 실패함.
// 3차 반복문과 경우의 수 구하는 순열/조합 코드 두 가지 부분에서 더 연습이 필요함

const expression = "100-200*300-500+20";

// result = 60420;
function solution(expression) {
    // 아이디어 : 연산자와 숫자를 분리하고 우선순위 경우의 수 마다 연산을 모두 해 본뒤 최대값을 고른다
    // 이 때 숫자와 연산자의 순서가 섞이면 안된다.
    let answer = 0;
    let nums = [];
    const ops = [];
    let num = "";
    // 1. 숫자와 연산자를 분리한다
    for (let i = 0; i < expression.length; i++) {
        if(expression[i].charCodeAt() >= 48 && expression[i].charCodeAt() <= 57) {
            num += expression[i];
        } else {
            nums.push(Number(num));
            num = "";
            ops.push(expression[i]);
        }
    }

    // 2. 문자열인 숫자의 타입을 계산을 위해 숫자로 바꿔준다
    nums.push(Number(num));

    // 3. 연산자의 우선순위별로 검색을 위해 경우의 수를 배열로 만든다.
    let opSet = new Set(ops);
    opSet = Array.from(opSet);
    // 3-1. 순열의 경우의 수를 구하는 코드는 검색해서 배웠다.
    const getPermutations= function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열
            const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
            const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
            results.push(...attached); // 배열 spread syntax 로 모두다 push
        });

        return results; // 결과 담긴 results return
    };

    const result = getPermutations(opSet, opSet.length);

    // 4. 연산자 우선순위 경우의 수 마다 수식을 계산해준다
    // 4-1. 3차 반복문이 안익어서 머리속에 잘 안떠오른다.
    for (let i = 0; i < result.length; i++) {
        // 5. 계산해야 하는 배열을 복사해서 수행한다 - 참조 영향을 안 받게 하기위해
        const copyNum = nums.slice();
        const copyOp = ops.slice();

        for (let j = 0; j < result[i].length; j++) {
            for(let k = 0; k < copyOp.length; k++) {
                if(copyOp[k] === result[i][j]) {
                    // 6. 연산자에 해당할경우 연산자 앞뒤의 숫자를 계산해주고 연산자와 숫자를 배열에서 제거한다.
                    switch (copyOp[k]) {
                        case '*' :
                            copyNum[k] *= copyNum[k + 1];
                            copyNum.splice(k + 1, 1);
                            copyOp.splice(k, 1);
                            k--;
                            break;
                        case '+' :
                            copyNum[k] += copyNum[k + 1];
                            copyNum.splice(k + 1, 1);
                            copyOp.splice(k, 1);
                            k--;
                            break;
                        case '-' :
                            copyNum[k] -= copyNum[k + 1];
                            copyNum.splice(k + 1, 1);
                            copyOp.splice(k, 1);
                            k--;
                            break;
                    }
                }
            }
        }
        // 7. 절대값으로 0보다 큰 연산숫자를 넣은뒤 더 큰 숫자가 나오면 답을 교체한다.
        if(Math.abs(copyNum[0]) >= answer) {
            answer = Math.abs(copyNum[0]);
        }
    }

    return answer;
}

console.log(solution(expression));
// https://programmers.co.kr/learn/courses/30/lessons/42890
// lv2 후보키

const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

// result = 2
function checked(arr) {
    const seted = new Set();
    for (let v of arr) {
        if(seted.has(v.join(""))) {
            return false;
        } else {
            seted.add(v.join(""));
        }
    }
    return true;
}

function solution(relation) {
    let answer = 0;
    const subsets = (nums) => {
        let res = [];
        const dfs = (start = 0, arr = []) => {
            res.push(arr);

            for (let i = start; i < nums.length; i++) {
                dfs(i + 1, [...arr, nums[i]]);
            }
        };
        dfs();
        res.sort((a, b) => a.length - b.length);
        res = res.filter((v) => v.length);
        return res;
    };

    const idxArr = Array.from({ length: relation[0].length }, (_, idx) => idx);
    let caseIdxArr = subsets(idxArr);

    while(caseIdxArr.length) {
        const nowCase = caseIdxArr[0];
        const chkTable = relation.map((v) => v.filter((_, idx) => nowCase.includes(idx)));

        if (checked(chkTable)) {
            answer++;
            caseIdxArr = caseIdxArr.filter((idxArr) => {
                for (let idx of nowCase) {
                    if (!idxArr.includes(idx)) {
                        return true;
                    }
                }
                return false;
            });
        } else {
            caseIdxArr.shift();
        }
    }

    return answer;
}


console.log(solution(relation));
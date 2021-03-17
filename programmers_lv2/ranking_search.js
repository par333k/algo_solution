// https://programmers.co.kr/learn/courses/30/lessons/72412?language=javascript
// lv2 순위 검색

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
// result = [1,1,1,1,2,4]
function solution(info, query) {
    let answer = [];
    const mappedInfo = {};

    const combination = (specs, score, idx) => {
        const key = specs.join('');
        const value = mappedInfo[key];

        if (value) {
            mappedInfo[key].push(score);
        } else {
            mappedInfo[key] = [score];
        }
        for (let i = idx; i < specs.length; i++) {
            const temp = specs.slice();
            temp[i] = '-';
            combination(temp, score, i + 1);
        }
    }

    for (let i = 0; i < info.length; i++) {
        const spec = info[i].split(" ");
        const score = Number(spec.pop());
        combination(spec, score, 0);
    }

    for (let key in mappedInfo) {
        mappedInfo[key]  = mappedInfo[key].sort((a,b) => {
            return a - b;
        })
    }


    for (let i = 0; i < query.length; i++) {
        const replaceAnd = query[i].replace(/and/g, " ");
        const condition = replaceAnd.split(" ");
        const score = Number(condition.pop());
        const key = condition.join("");
        const infomation = mappedInfo[key];

        let number = 0;
        if (infomation) {
            let start = 0;
            let end = infomation.length;
            while (start < end) {
                let mid = Math.floor((start + end)/2);
                if(infomation[mid] >= score) {
                    end = mid;
                } else {
                    start = mid + 1;
                }
            }

            answer.push(infomation.length - start);
        } else {
            answer.push(0);
        }

    }

    return answer;
}

console.log(solution(info,query));
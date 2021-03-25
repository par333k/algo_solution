// https://programmers.co.kr/learn/courses/30/lessons/17677
// lv2 [1차] 뉴스 클러스터링

const str1 = "aa1+aa2";
const str2 = "AAAA12";

// result = 43690;
function solution(str1, str2) {
    let answer = 0;

    let regexp = /[a-zA-Z]/;
    let temp1 = [];
    let temp2 = [];
    for(let i = 0; i < str1.length-1; i++) {
        if(regexp.test(str1[i]) && regexp.test(str1[i+1])) {
            temp1.push((str1[i]+str1[i+1]).toLowerCase());
        }
    }

    for(let i = 0; i < str2.length-1; i++) {
        if(regexp.test(str2[i]) && regexp.test(str2[i+1])) {
            temp2.push((str2[i]+str2[i+1]).toLowerCase());
        }
    }


    const totalSet = new Set([...temp1, ...temp2]);

    for(let item of totalSet) console.log(item);

    let union = 0;
    let intersection = 0;

    totalSet.forEach((v) => {
        const has1 = temp1.filter((val) => val === v).length;
        console.log(has1);
        const has2 = temp2.filter((val) => val === v).length;
        console.log(has2);

        union += Math.max(has1, has2);
        intersection += Math.min(has1, has2);
    })

    if (union === 0 && intersection === 0) answer = 65536;
    else answer = parseInt((intersection / union)*65536);

    return answer;
}

console.log(solution(str1, str2));
const p = [[1,3],[3,1],[3,5],[2,5],[5,3]];
function solution(p)
{
    let answer = 0;
    let temp = p.shift();
    let flag;
    for (let i = 0; i < p.length; i++) {
        flag = true;
        for (let j = 0; j < p[i].length; j++) {
           if(!p[i].includes(temp[j])) {
               flag = false;
           };

        }
        if(flag) {
            answer++;
            p.splice(i, 1);
            temp = p.shift();
            i = 0;
        }
    }
    return answer;
}

console.log(solution(p))

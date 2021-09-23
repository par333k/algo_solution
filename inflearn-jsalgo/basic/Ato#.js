function solution(s){
    let answer="";
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "A") {
            answer += "#";
        } else {
            answer += s[i];
        }
    }
    return answer;
}

let str="BANANA";
console.log(solution(str));

//정규표현식
function solution2(s){
    let answer=s.replace(/A/g, "#");
    return answer;
}

let str2="BANANA";
console.log(solution2(str2));

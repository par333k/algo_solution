// https://programmers.co.kr/learn/courses/30/lessons/12940
// lv1 최대공약수와 최소공배수

const a = 2;
const b = 5

// result = [1, 10]
function gcd(a, b) {
    while(b!=0) {
        let r=a%b;
        a=b;
        b=r;
    }
    return a;
}

function lcm(a, b) {
    return a*b / gcd(a,b);
}

function solution(a, b) {
    let gcdnum = gcd(a, b);
    let lcmnum = lcm(a, b);
    let answer = [];
    answer.push(gcdnum);
    answer.push(lcmnum);

    return answer;
}

console.log(solution(a, b));

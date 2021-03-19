// https://programmers.co.kr/learn/courses/30/lessons/12953
// lv2 n개의 최소공배수

const arr = [2,6,8,14];

// result = 168;
function solution(arr) {
    let answer = 0;

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

    while(arr.length >= 2) {
        let a = arr.pop();
        let b = arr.pop();

        arr.push(lcm(a,b));
    }

    answer = arr[0];

    return answer;
}

console.log(solution(arr))
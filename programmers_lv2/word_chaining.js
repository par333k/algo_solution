// https://programmers.co.kr/learn/courses/30/lessons/12981
// lv2 끝말잇기

const words = ["hello", "one", "even", "never", "now", "world", "draw"];
const n = 2;

// result = [1, 3];
function solution(n, words) {
    let answer = [];
    let arr = [];
    let temp = 0;
    arr.push(words[0]);
    
    for(let i = 1; i < words.length; i ++) {
        if(arr.includes(words[i])) {
            temp = i;
            break;
        }
        
        arr.push(words[i]);
        
        let endChar = words[i-1][words[i-1].length-1];
        let startChar = words[i][0];
        
        if(startChar !== endChar) {
            temp = i;
            break;
        }
    
    }

    let count = 0;
    let order = 0;
    
    if(temp === 0) return [0, 0];
    
    if((temp+1)%n === 0) {
        count = n;
    } else {
        count = (temp+1)%n;
    }
    
    order = Math.ceil((temp+1)/n);
    answer = [count, order];
    return answer;
}

console.log(solution(n, words));
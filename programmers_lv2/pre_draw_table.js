// https://programmers.co.kr/learn/courses/30/lessons/12985
// lv2 예상대진표

// 탈출조건이 중요, 인접했다고 무조건 맞붙는게 아님
// 첫번째 라운드 부터 만나는 경우 고려해야함
// 처음에 5,6번이어서 만나는 경우나 
// 2,3이어서 안만나는 경우 생각해야함.
const n = 8;
const a = 4;
const b = 7;

// result = 3;
function solution(n,a,b) {
    let round = 1;
    let maxRound = n / 2;
    if (round === 1) {
         if(a > b) {
            //큰 쪽이 홀수면 다음 라운드
            //작은 쪽이 홀수면 가능
            if(a%2 === 0 && (a-b) === 1) {
                return round;
            } 
        } else {
            if(b%2 === 0 && (b-a) === 1) {
                 return round;
            }
        }
    };
    
    while(round <= maxRound){
        round += 1;
                
        a = Math.ceil(a/2);
        b = Math.ceil(b/2); 
 
        if(a > b) {
            if(a%2 === 0 && (a-b) === 1) {
                break;
            } 
        } else {
            if(b%2 === 0 && (b-a) === 1) {
                break;
            }
        }
    }
    return round;
};

console.log(solution(n,a,b));


// https://programmers.co.kr/learn/courses/30/lessons/12926
// lv1 시저암호

const s = "a B z";
const n = 4;

// result = "e F d"
function solution(s, n) {
    let answer = '';
    let alphabetlower = "abcdefghijklmnopqrstuvwxyz";
    let alphabetupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //각 알파벳의 위치 활용
    for (let i = 0; i < s.length; i++) {
        let lower = s.charAt(i).toLowerCase();
        let upper = s.charAt(i).toUpperCase();
        
        if(s.charAt(i) == lower) {
            for(let j = 0; j < alphabetlower.length; j++) {
                if(s.charAt(i) == alphabetlower.charAt(j)) {
                    if(j + n < alphabetlower.length) {
                       // s.replace(s.charAt(i),alphabetlower.charAt(j+n));
                        answer += alphabetlower.charAt(j+n);
                        break;
                    } else if (j + n >= alphabetlower.length){
                        let idx = (j+n) - alphabetlower.length;
                        while(idx > 26) {
                            idx = idx - 26
                        }
                     //   s.replace(s.charAt(i),alphabetlower.charAt(idx));
                        answer += alphabetlower.charAt(idx);
                        break;
                    }
                }
            }
            
        }
        
        if(s.charAt(i) == upper) {
            for(let j = 0; j < alphabetupper.length; j++) {
                if(s.charAt(i) == alphabetupper.charAt(j)) {
                    if(j + n <  alphabetupper.length) {
                        answer += alphabetupper.charAt(j+n);
                        } else if (j + n >= alphabetupper.length){
                            let idx = (j+n) - alphabetupper.length;
                            while(idx > 26) {
                            idx = idx - 26
                            }
                            answer += alphabetupper.charAt(idx);
                        }
                }
            }
            
        }
        
        if(s.charAt(i) == " ") {
            answer += s.charAt(i);
        }
    }
    
    return answer;
}

console.log(solution(s,n));
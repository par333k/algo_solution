// https://programmers.co.kr/learn/courses/30/lessons/60058?language=javascript
// lv2 괄호 변환 문제

// 왼쪽 괄호 개수, 오른쪽 괄호 개수를 세는 변수가 필요하다
// 올바른 괄호 문자열인지 여부를 체크하는 boolean 변수가 필요하다
// 갯수를 앞부터 세어 균형잡힌 문자열이 되면 u로 분리하여 u와 v로 나눈다
// u가 올바른 괄호 문자열인지 아닌지를 확인한다
// u가 올바른 괄호인지 여부에 따라 재귀를 분리하여 실행한다.
// 괄호 방향을 뒤집는 거지 문자열을 뒤집는게 아님!

const p = "()))((()";
// result "()(())()";
function solution(p) {
    let answer = '';
    let left = 0;
    let right = 0;
    let correct = true;

    if (p.length === 0) { // 빈 문자열이면 비워서 리턴
        return answer;
    }

    for (let i = 0; i < p.length; i++) {
        if (p[0] === ')') { // 닫는 괄호로 시작하면 u 문자열을 올바른 괄호로 분리할 수 없다
            correct = false;
        }

        if (p[i] === '(') {
            left++;
        } else {
            right++;
        }

        if (left === right) { // 균형잡힌 괄호를 맨 앞 괄호부터 세어 맞을경우  u와 v로 분리한다
            let u = p.slice(0, i + 1);
//            console.log(u);
            let v = p.slice(i + 1, p.length);
//            console.log(v);
            if (correct === false) { // u가 올바르지 않은 괄호일 때
                answer += '(';
                answer += solution(v);
                answer += ')';
                u = u.substr(1);
                u = u.substr(0, u.length - 1);
                let reverseU = '';
                for (let j = 0; j < u.length; j++) { // 정렬을 역순하라는 이야기가 아니라 괄호를 반대로 바꾸라는 뜻
                    if (u[j] === '(') {
                        reverseU += ')'
                    } else {
                        reverseU += '('
                    };
                }
                answer += reverseU;
                return answer;
            } else { // u 괄호가 올바를 때
                answer += u;
                answer += solution(v);
                return answer;
            }
        }
    }
}

solution(p);
console.log(solution(p));
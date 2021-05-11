/**
 *  유효한 괄호 검증
 *  입력으로 주어진 문자열은 3가지 괄호의 열고 닫고 만을 포함한다.
 *  해당 괄호는 '('와 쌍인 ')', '{'와 쌍인 '}', '['와 쌍인']' 이다
 *  열고 닫음의 쌍이 정상적인지 확인해봐자
 *
 *  제한사항
 *  1. 문자열 입력
 *  2. (, ), {, }, [, ] 만으로 구성
 *  3. 비어 있는 문자열은 유효하다고 판단.
 *  4. 반환값은 true / false
 *
 *  아이디어
 *  1. Brute-force
 *  1-1. 스택 생성
 *  1-2. 문자열을 순회한다.
 *      - 열림 괄호는 스택에 넣는다.
 *      - 닫힌 괄호는 스택에 최근 문자를 꺼내 쌍이 맞는지 확인한다
 *      - 맞지 않으면 바로 false 반환
 *  1-3. 모든 순회가 끝났다면 true 반환
 *
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(n) 스택에 열림 괄호 문자 추가 공간
 */

const str = '({})';

function solution(str) {
    let dicObj = {};
    dicObj[')'] = '(';
    dicObj[']'] = '[';
    dicObj['}'] = '{';

    let stack = [];
    if (str.length === 1) return false;

    for (let char of str) {
        if (!Object.keys(dicObj).includes(char)) {
            stack.push(char);
            console.log(stack);
        } else {
            if (stack) {
                let pair = stack.pop();
                if(dicObj[char] != pair) {
                    return false;
                }
            }
        }
    }

    return (stack.length) == 0
}

console.log(solution(str));

// best
const s= '({[]})';
function solutionBest(s) {
    const stack = [];

    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }

    return stack.length === 0;
}

// best 버전 문법개선 - 속도는 미미하게 더 느림
function solutionBest2(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        if (map[c]) {
            stack.push(map[c])
        } else if (c !== stack.pop()) {
            return false;
        }
    }

    return !stack.length;
}

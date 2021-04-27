/**
 *  회문 확인
 *  주어진 문자열이 회문인지 아닌지 확인하자.
 *  회문으로 확인해야 하는 문자는 알파벳과 숫자이며, 알파멧은 대 / 소문자를 구분하지 않는다.
 *  가령 입력으로 'Abbc, c, bb, a' 문자열이 주어지면 true를 반환해야한다.
 *  알파벳과 숫자만 남기면 'Abbccbba'가 되며 대소문자를 구분하지 않기 떄문에
 *  'abbccbba'가 된다. 이 문자는 뒤집어도 같다. 이것이 회문이 되는 조건이다.
 *
 *  제한사항
 *  1. 문자열을 입력에 대해 true 또는 false를 반환한다.
 *  2. 비어있는 문자열은 회문이다.
 *
 *  아이디어
 *  1-1. i는 0에서 시작하고 j는 문자열의 끝에서 시작
 *  1-2. i가 j보다 작을 때까지
 *      - i 위치에 문자가 알파벳 혹은 숫자가 아니라면, i + 1
 *      - j 위치에 문자가 알파벳 혹은 숫자가 아니라면, j - 1
 *      - i 위치와 j 위치의 문자가 같은지 비교
 *      - 같지 않다면 false 반환
 *  1-3. 모두 확인이 되었다면, true 반환
 *
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(1)
 *
 *  2-1. 알파벳과 숫자만 남기고 제거
 *  2-2. 소문자로 변환
 *  2-3. 변환 완료된 문자열과 해당 문자열을 뒤집은 문자열을 비교하여 같으면 true, 다르면 false
 *
 *  시간 복잡도: O(n)
 *  공간 복잡도: O(n)
 */

//const str = "Abbc, c, bb, a";
const str = ', , --';
function solution(str) {
    let i = 0;
    let j = str.length - 1;
    str = str.toLowerCase();
    while ( i < j ) {
        const regExp = /^[a-zA-Z0-9]*$/;
        while ( i < j ) {
            if(regExp.test(str[i])) {
                break;
            }
            i = i + 1;
        }

        while( i < j ) {
            if(regExp.test(str[j])) {
                break;
            }
            j = j - 1;
        }
        console.log(i, j);
        if(str[i] !== str[j]) {
            return false;
        }

        i = i + 1;
        j = j - 1;
    }
    return true;
}

console.log(solution(str));


function solution2(str) {
    str = str.toLowerCase();
    const regExp = /[ \{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\ '\"\\(\=]/gi;
    const alphaStr = str.replace(regExp, "");

    const reverse = alphaStr.split('').reverse().join('');
    console.log(reverse);
    if(alphaStr === reverse) {
        return true;
    }

    return false;
}

console.log(solution2(str));


// best, 아이디어 2번과 실질적으로 차이는 근소하다.
const isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) return false;
    }
    return true;
}

console.log(isPalindrome(str));

/**
 *  입력으로 받은 문자열이 IPv4인지 IPv6인지 확인하는 함수를 작성하라
 *  IPv4 주소는 .으로 분리된 4개의 10진수로 구성되며
 *  각 숫자들은 0에서 255까지의 범위를 가진다
 *  점으로 구분된 각 숫자는 0으로 시작할 수 없다.
 *  IPv6 주소는 : 으로 구분되며 16진수로 구성된다. 16진수 숫자는 4자리이며 4자리 숫자 8개의 그룹으로 표현된다
 *  16진수에서 영문 a~f 까지는 소문자/대문자 혼용이 가능하다. 즉, 구별하지 않는다.
 *  0으로 시작하는 숫자가 있으며 0000일때는 0 하나로 줄일 수 있다.
 *  하나뿐인 0을 생략할 수는 없다. 각 숫자는 4자리를 넘을 수 없다.
 *  0으로 시작이 가능하고, 5자리 숫자는 불가능하다.
 *  IPv6 예시는 다음과 같다.
 *  2020:0BC3:0000:0000:853e:0777:1234
 *
 *  입력값으로 올바른 IPv4를 받으면 IPv4를 반환하고, 올바른 IPv6을 반환한다
 *  둘 다 아닐 경우 'Neither'를 반환한다.
 *
 *  제한사항
 *  1. IPv4
 *  1-1. 점(.)으로 숫자구분
 *  1-2. 점(.)으로 구분된 숫자는 4개
 *  1-3. 각 숫자의 범위는 0에서 255 - 10진수
 *  1-4. 0을 제외하고 0으로 시작하는 숫자는 없다.
 *      - 01, 00, 023과 같은 숫자는 유효하지 않음.
 *  2. IPv6
 *  2-1. 콜론(:)으로 숫자 구분
 *  2-2. 콜론(:)으로 구분된 숫자는 8개그룹
 *  2-3. 각 숫자는 16진수 0000 에서 FFFF까지 (4자리 16진수)
 *  2-4. 각 숫자는 4자리를 채우기 위해 0으로 시작할 수 있음
 *  2-5. 0000의 경우에는 0으로 사용 가능
 *  2-6. 콜론(:) 사이에 숫자가 없으면 유효한 IPv6이 아님
 *  2-7. 각 숫자는 4자리를 넘어서 사용할 수 없음.
 *  
 *  아이디어
 *  1. Brute-force
 *  1-1. 점(.)과 콜론(:)으로 IPv4의 확인인지 IPv6의 확인인지 구분
 *  1-2. IPv4 확인
 *      - 점(.)으로 문자열 리스트로 분리
 *      - 분리된 리스트의 크기가 4인지 확인
 *      - 각 문자열을 순회
 *          - 문자열의 길이가 1 ~ 3인지 확인
 *          - 해당 문자열이 '0'이라면 길이가 1인지 확인
 *          - 해당 문자열이 숫자이고 255보다 작은지 확인
 *  1-3. IPv6 확인
 *      - 콜론(:)으로 문자열 리스트로 분리
 *      - 분리된 리스트의 크기가 8인지 확인
 *      - 각 분리된 문자열의 길이가 0보다 크고 4보다 작은지 검사
 *      - 문자열의 각 문자가 모두 16진수 숫자 및 문자로 구성되어 있는지 확인
 *
 *  시간 복잡도 : O(L), L은 입력 문자열 길이
 *  공간 복잡도 : O(1)
 *
 *  2. 정규표현식 문법
 *  2-1. IPv4의 규칙을 따르는 정규 문법 구성
 *  2-2. IPv6의 규칙을 따르는 정규 문법 구성
 *  2-3. 정규 문법 실행 및 규칙(IPv4 혹은 IPv6) 반환
 *
 *  시간 복잡도: O(1)
 *  공간 복잡도: O(1)
 *
 */

const ipAddress = '143.187.220.001';
//const ipAddress = '2020:0BC3:0000:0000:fff3:853e:0777:1234';
//const ipAddress = "01.01.01.01";

function solution(ipAddress) {
    if (ipAddress.includes('.')) {
        // ip4
        const strArr = ipAddress.split('.');

        if (strArr.length === 4) {
            for (let i = 0; i < strArr.length; i++) {
                if(strArr[i].length > 1 && strArr[i][0] == 0) return "Neither";

                if (strArr[i].length >= 1 && strArr[i].length <= 3) {
                    console.log('들어와?');
                    for (let j = 0; j < strArr[i].length; j++) {
                        const nums = '0123456789';
                        if (!nums.includes(strArr[i][j])) {
                            return "Neither";
                        }
                    }

                    if (Number(strArr[i]) > 255) {
                        return 'Neither';
                    } else if (Number(strArr[i]) === 0) {
                        if (strArr[i].length > 1) {
                            return 'Neither';
                        }
                    }

                } else {
                    return 'Neither';
                }
            }
            return 'IPv4';
        }
    } else if (ipAddress.includes(':')) {
        // ip6
        const strArr = ipAddress.split(':');
        if (strArr.length === 8) {
            for (let i = 0; i < strArr.length; i++) {
                if (strArr[i].length > 0 && strArr[i].length < 5) {
                    const hexDigits = "0123456789abcdefABCDEF";
                    for (let j = 0; j < strArr[i].length; j++) {
                        if (!hexDigits.includes(strArr[i][j])) {
                            return 'Neither';
                        }
                    }
                } else {
                    return 'Neither';
                }
            }
        } else {
            return 'Neither';
        }

        return 'IPv6';
    }

    return 'Neither';
}

console.log(solution(ipAddress));

//best
function solution2(ipAddress) {
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    console.log(ipAddress + '.');

    return ipv4.test(ipAddress + '.') ? 'IPv4' : ipv6.test(ipAddress + '.') ? 'IPv6' : 'Neither';

}

console.log(solution2(ipAddress));

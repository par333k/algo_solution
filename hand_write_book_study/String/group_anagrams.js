/**
 *  그룹 에너그램
 *  문자열 리스트가 주어지고, 리스트에 있는 문자열을 검사해
 *  서로 같은 애너그램을 가지는 문자열을 그룹으로 묶어서 반환하라
 *  애너그램은 같은 알파벳 구성요소로 다른 단어를 만들 수 있는 경우다
 *  ex) [eat, tea] , [repaid, paired]
 *
 *  제한사항
 *  1. 문자열 리스트
 *  2. 리스트에 있는 모든 문자열은 소문자로 구성
 *
 *  아이디어
 *  1. 정렬 및 해시테이블
 *  1-1. 해시테이블 생성
 *      - 키로 문자열, 값으로 리스트를 가진다
 *  1-2. 입력 문자열 리스트를 순회
 *      - 문자열을 정렬
 *      - 정렬된 문자열을 키로 찾은 리스트에 문자열을 추가
 *  시간 복잡도 : O(n * LlogL) n은 문자열 총 개수, L은 문자열 중 가장 긴 문자열 길이
 *  공간 복잡도 : O(n * L)
 *
 *  2. 문자 카운트 및 해시테이블
 *  2-1. 해시테이블 생성
 *      - 키로 a ~ z까지 문자 개수 튜플, 값으로 리스트를 가진다.
 *  2-2. 입력 문자열 리스트를 순회
 *      - 각 문자열의 문자를 순회하며 카운트 한다
 *      - 만들어진 문자 카운트 배열을 기준으로 해시 테이블에서 키로 찾고
 *      같은 키를 가지는 문자열을 값으로 추가한다
 *  시간 복잡도 : O(n * L)
 *  공간 복잡도 : O(n * L)
 */

const strArr = ["eat","tea","tan","ate","nat","bat"];
const strs = ["eat","tea","tan","ate","nat","bat"];
function solution(strArr) {
    // 각 문자열을 정렬한 배열을 생성
    // 새 문자열 배열에서 중복된 문자열의 인덱스 위치의 원래 문자열 배열의 문자열을
    // 키 - 밸류 형태로 저장
    const hashtable = {};
    const tempArr = strArr.slice();
    let arr = [];
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i].split('').sort().join('');
    }

    const seted = new Set(tempArr);
    const setArr = Array.from(seted);
    console.log(setArr[0]);
    console.log(tempArr);
    for (let i = 0; i < setArr.length; i++) {
        for (let j = 0; j < tempArr.length; j++) {
            if(setArr[i] === tempArr[j]) {
                arr.push(strArr[j]);
            }
        }
        hashtable[setArr[i]] = arr;
        arr = [];
    }

    let res = [];
    for (let key in hashtable) {
        res.push(hashtable[key]);
    }
    console.log(res);
}

console.log(solution(strArr));


// best
const groupAnagrams = strs => {
    const mapping = {};
    for (let str of strs) {
        const sorted = str.split('').sort().join('');
        if(mapping[sorted] !== undefined) {
            mapping[sorted].push(str);
        } else {
            mapping[sorted] = [str];
        }
    }
    return Object.values(mapping);
};


console.log(groupAnagrams(strs));


// idea2 - best
/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * key point:
 * prime multiply prime is unique, each char can be represented by a prime
 * since [a-z] to  [0-25]
 * use `[charCodeAt() - 97]` to get unique index from the prime array
 * the prodcut can be set to the key name "prod"
 **/
const groupAnagrams2 = function (strs) {
    const map = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    strs.forEach(str => {
        let prod = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
        map[prod] ? map[prod].push(str) : map[prod] = [str];
    });
    return Object.values(map);
};

console.log(groupAnagrams2(strs));

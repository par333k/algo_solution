// https://programmers.co.kr/learn/courses/30/lessons/72411
// 메뉴 리뉴얼 문제
// 못풀어서 주석으로 이해부터
// 재귀는 손에 쓰면서 꼼꼼히 실행흐름을 익혀봐야겠다
// 재귀 너무 어렵다...
// 코드 출처 https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EB%A9%94%EB%89%B4-%EB%A6%AC%EB%89%B4%EC%96%BC-Javascript

const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course = [2,3,5];

function solution(orders, course) {
    const orderedCountMap = new Map();
    const maxCountMap = new Map();
    const courseSet = new Set(course);
    // 2명 이상 손님들이 주문한 2개 이상의 요리중 요리 코스 개수(courseSet에 있는 수)에 맞는 요리 조합(문자열)이 있을때
    // 해당되는 요리중 가장 여러번 주문된(중복된) 요리 조합이 필요함
    function combination(result, index, str) {
        console.log('재귀', result, index, str);
        if (courseSet.has(result.length)) {
            let count = orderedCountMap.get(result) || 0;
//            console.log('요리 코스 중복회수',result, count);
            orderedCountMap.set(result, ++count);
            const max = maxCountMap.get(result.length) || 0;
//            console.log('코스 길이 최대숫자', result.length, count);
            if (max < count) {
                maxCountMap.set(result.length, count);
            }
        }
        for (let i = index; i < str.length; i++) { // orders에 담긴 문자열을 반복
            console.log('포문', i, 'result', result);
            combination(result + str[i], i + 1, str);
        }
    }

    orders.map(order => order.split("").sort().join(""))
        .forEach((e) => {
            console.log('orders foreach str', e);
            combination("", 0, e)
        });

    return course
        .map(length => {
            const max = maxCountMap.get(length);
            return Array.from(orderedCountMap)
                .filter(e =>
                    e[0].length === length && e[1] >= 2 && e[1] === max
                )
                .map(e => e[0]);
        })
        .flatMap(e => e)
        .sort();
}

console.log(solution(orders, course));
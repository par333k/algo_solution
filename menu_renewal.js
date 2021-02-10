// https://programmers.co.kr/learn/courses/30/lessons/72411
// 메뉴 리뉴얼 문제
// 못풀어서 주석으로 이해부터
// 재귀는 손에 쓰면서 꼼꼼히 실행흐름을 익혀봐야겠다
// 재귀 너무 어렵다...
// 코드 출처 https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EB%A9%94%EB%89%B4-%EB%A6%AC%EB%89%B4%EC%96%BC-Javascript

// const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
// course 원소의 개수에 맞는 단품요리가 있을 때
// 해당되는 요리중 가장 여러번 주문된(중복된) 요리 조합이 필요함
// 연속된 문자열에서 순서와 상관없이 해당 문자들이 들어있으면 됨
// orders의 문자를 한쪽으로 정렬해서 중복되는 경우를 체크해도 됨(순서와 상관이 없기 때문)
// orders의 한 손님의 단품 목록(order)에서 코스요리 길이(course의 원소)에 해당하는 길이의 문자열을 체크
// 해당 결과를 요리조합 , 중복회수로 저장
// 해당 요리 조합 길이의 중복회수 최대값을 저장해야함
// 주어진 요리 조합과 중복회수가 기록된 배열에서 요리 조합의 길이가 코스 길이와 일치하고
// 해당 요리조합이 2번 이상 중복(2인 이상) 되었으며, 중복된 횟수의 최대값과 일치한다면
// 해당 요리 조합을 문자열 형식으로 배열에 담는다
// 해당 배열을 오름차순 정렬하여 리턴
const orders = ["XYZ", "XWY", "WXA"];
const course = [2,3,4];

function solution(orders, course) {
    const orderedCountMap = new Map();
    const maxCountMap = new Map();
    const courseSet = new Set(course);
    // 2명 이상 손님들이 주문한 2개 이상의 요리중 요리 코스 개수(courseSet에 있는 수)에 맞는 요리 조합(문자열)이 있을때
    // 해당되는 요리중 가장 여러번 주문된(중복된) 요리 조합이 필요함
    function combination(result, index, str) {
//        console.log(result, index, str);
        if (courseSet.has(result.length)) {
            let count = orderedCountMap.get(result) || 0;
//            console.log('요리 코스 중복회수',result, count);
            orderedCountMap.set(result, ++count);
            const max = maxCountMap.get(result.length) || 0;
            console.log("maxcountmap", max, count);
            if (max < count) {
                maxCountMap.set(result.length, count);
            }
        }
        for (let i = index; i < str.length; i++) { // orders에 담긴 문자열을 반복
 //           console.log('index', i);
            combination(result + str[i], i + 1, str);
        }
    }

    orders.map(order => {
        console.log(order.split(""));
      return order.split("").sort().join("")
    })
        .forEach((e) => {
            console.log('orders foreach str', e);
            combination("", 0, e)
        });

    let answer = course.map(length => {
        const max = maxCountMap.get(length);
        const result = Array.from(orderedCountMap);
        console.log("from", result);
        return result.filter(e =>  //e[0] = key, e[1] = value
        {
           return e[0].length === length && e[1] >= 2 && e[1] === max
        }).map(e => e[0]);
    }).flatMap(e => e).sort();
    console.log(answer);
    return answer;
}

console.log(solution(orders, course));


/* 1차 수정해본거, 반복문으로도 시도해보자.
function solution(orders, course) {
    //주문된 숫자, 최대 숫자, 요리 코스숫자.
    const orderCount = new Map();
    const maxCount = new Map();
    // orders 정렬 - 순서에 상관없이 조합만 들어있으면 됨
    orders = orders.map(order => {
        return order.split("").sort().join("");
    });

    function orderRecursion(result, idx, str) {
        if (course.includes(result.length)) {
            let cnt = orderCount.get(result) || 0;
            orderCount.set(result, ++cnt);
            const max = maxCount.get(result.length) || 0;
            if(max < cnt) {
                maxCount.set(result.length, cnt);
            }
        }

        for (let i = idx; i < str.length; i++) {
//            console.log(i);
            orderRecursion(result + str[i], i + 1, str);
        }
    }

//    console.log(orders);
    for (let i = 0; i < orders.length; i++ ) {
        let char = orders[i];
//        console.log(char);
        orderRecursion("", 0, char);
    }

    let answer = course.map(length => {
        const max = maxCount.get(length);
        const result = Array.from(orderCount);
        return result.filter(e => { // e[0] = key, e[1] = value
            return e[0].length === length && e[1] >= 2 && e[1] === max
        }).map(e => e[0]);
    }).flatMap(e => e).sort();
//    console.log(answer);
    return answer;
}*/

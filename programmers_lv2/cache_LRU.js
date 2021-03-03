// https://programmers.co.kr/learn/courses/30/lessons/17680?language=javascript
// lv2 캐시

const cacheSize = 3;
const cities = ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"];

// result = 21;

function solution(cacheSize, cities) {
    let answer = 0;
    // 캐시 사이즈는 캐싱할 수 있는 배열의 사이즈
    // 0 일 경우 각 배열 원소당 실행시간은 5
    // LRU 라는건 최근에 사용되지 않는 것부터 대체하는것
    // 캐시 미스가 일어날 경우, 해당 도시 이름을 캐싱
    // 기존 캐시 리스트에서 가장 참조된 지 오래된 것을 빼냄
    // 캐시가 참조 될 때마다 리스트의 순서가 변경되어야 함
    // 캐시에서 도시가 조회될 때마다 맨 앞으로 불러내고 한칸씩 뒤로 이동
    // splice 활용하면 간단하겠다 - 해당원소를 제거한 배열을 남김, 해당 원소를 배열로 리턴. splice(idx, 삭제할개수, 추가할 것(optional))
    if(cacheSize === 0) {
        answer = cities.length * 5;
        return answer;
    }

    let cacheList = new Array(cacheSize);
    let hitCount = 0;

    // 도시가 배열에 들어있는지 확인해서 중복되면 안됨
    // 캐싱은 처음부터 채울 필요가 없이 반복문을 돌면서 있으면/없으면에 따라 캐싱하고 전체 범위를 넘어가는지를 확인하면됨
    for(let i = 0; i < cities.length; i++) {
        let flag = true;
        for (let j = 0; j < cacheList.length; j++) {
            if(!cacheList[j]) { // 처음 캐시 리스트가 비었을 때 임의의 값을 채워줌
                cacheList[j] = "empty";
            }

            if(cities[i].toLowerCase() === cacheList[j].toLowerCase()) {
                //캐시에 도시명이 있는 경우
                // 없는 경우에 대한 변수 필요
                // 있을떄는 해당 원소를 캐시리스트 큐의 맨 뒤로 옮겨야함, 제일 오래 참조 안된걸 없애야하므로
                const cacheHit = cacheList.splice(j,1);
                cacheList.push(cacheHit[0]);
                flag = true;
                hitCount++;
                break;
            } else {
                flag = false;
            }
        }

        if(flag === false) {
            cacheList.shift();
            cacheList.push(cities[i]);
        }

    }

    const missed = (cities.length - hitCount);
    answer = (missed * 5) + (hitCount * 1);

    return answer;
}

console.log(solution(cacheSize, cities));

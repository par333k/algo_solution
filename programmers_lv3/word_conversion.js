// https://programmers.co.kr/learn/courses/30/lessons/43163
// lv3 단어변환
// 못풀었다. bfs, dfs, 트리에 너무 약해..
// bfs - 넓이 우선 탐색
/*
BFS는 queue 형태의 자료구조를 이용해 아래와 같이 탐색을 진행한다.
각 노드와 동일한 레벨에 존재하는 노드를 queue에 추가(push)하고
제일 먼저 추가된 노드를 꺼내고 (shift)
꺼낸 노드의 다음 레벨에 존재하는 노드들을 다시 queue에 추가(push) 하는 과정을 반복한다.
*/
/*
begin을 먼저 queue에 추가한다.
begin의 글자들을 순회하며 words 배열 내 begin과 한 개의 알파벳만 다른 단어들을 queue에 추가한다.
queue에서 제일 먼저 추가된 단어를 꺼내고, 현재 단어가 target과 일치하는지 확인한다.
1) 일치한다면, 현재의 레벨을 반환하고,
2) 일치하지 않는다면, 현재 단어와 words 배열 내 한 개의 알파벳만 다른 단어들(다음 레벨에 연결된 단어들이다.)을 임시 배열 temp에 추가한다.
queue가 비었다면 현재 레벨에 가능한 단어는 모두 탐색했다는 의미이다.
임시 배열 temp에 추가했던 단어들을 다시 queue에 추가함으로써 다음 레벨로 탐색을 이어간다.
위 과정의 반복을 통해 문제를 풀 수 있다.
단, 이미 탐색한 단어를 다시 queue에 추가한다면 hot -> dot -> hot -> dot …과 같이 무한 루프가 반복된다.
이미 탐색한 단어는 visited 배열에 추가하여 queue에 동일한 단어가 추가되지 않도록 하는 단계가 필요하다.
*/
const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

// result = 4
function solution(begin, target, words) {
    let answer = 0;
    const visited = new Set();
    const queue = [];
    let temp = [];

    if (!words.includes(target)) return 0;

    queue.push(begin);

    while (queue.length) {

        const now = queue.shift();
        visited.add(now);

        if (now === target) {
            return answer;
        }

        // 현재 단어와 하나의 알파벳만 다른 단어들을 임시 배열에 넣어준다.
        for (let i = 0 ; i < now.length ; i++) {
            const letter = slicedWord(now, i);
            console.log(letter);
            const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
            temp.push(...matched);
//            console.log(temp);
        }


        if(queue.length === 0) {
            queue.push(...temp);
            temp = [];
            answer++;
        }
    }

    function slicedWord (word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i, 1);
        return wordToArray.join('');
    }

    return answer;
}

console.log(solution(begin, target, words));

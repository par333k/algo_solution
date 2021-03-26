// https://programmers.co.kr/learn/courses/30/lessons/42579?language=javascript
// lv3 베스트앨범
// lv3은 복습 꼭 해야함

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

// result = [4, 1, 3, 0]
function solution(genres, plays) {
    let answer = [];
    let genreAcc = genres.reduce((acc, g, i) => {
        if(!acc[g]) {//초기 키값 여부
            acc[g] = {plays: plays[i], song: []};
        } else {//해당 키에 맞는 밸류 합산
            acc[g].plays += plays[i];
        }
        acc[g].song.push([i, plays[i]]);
        return acc;
    }, {});
    //객체의 plays (재생횟수) 기준으로 장르 정렬
    let list = Object.values(genreAcc);
    let sortedList = list.sort((a, b) => b.plays - a.plays);

    //장르의 노래 곡수가 2곡까지만 되므로 music 배열의 길이를 체크하여 2곡부터는 순서를 정하고 1곡인 경우는 무조건 등록되도록
    //곡의 재생숫자 다음으로 인덱스 순서 내림차순을 고려해야함

    sortedList.forEach((genre) => {
        if (genre.song.length > 1) {
            genre.song.sort((a, b) => {
                console.log(a, b)
                if (a[1] > b[1]) {
                    return -1;
                } else if (a[1] < b[1]) {
                    return 1;
                } else if (a[1] == b[1]) {
                    return (a[0] > b[0]) ? 1: -1;
                }
            });
            answer.push(genre.song[0][0]);
            answer.push(genre.song[1][0]);
        } else {
            answer.push(genre.song[0][0]);
        }
    });
    return answer;
}

console.log(solution(genres, plays));
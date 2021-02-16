// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
// 프로그래머스 lv1 모의고사 문제

const answers = [1,3,2,4,2];
//result = [1,2,3];

function solution(answers) {
    let answer = [];
    let count = [0, 0, 0];
    let std1 = [1, 2, 3, 4, 5];
    let std2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let i = 0, j = 0, k = 0;

    for(let n = 0; n < answers.length; n++){
        if(i > std1.length-1){
            i = 0;
        }
        if(j > std2.length-1){
            j = 0;
        }
        if(k > std3.length-1){
            k = 0;
        }
        if(answers[n] == std1[i]){
            count[0]++;
        }
        if(answers[n] == std2[j]){
            count[1]++;
        }
        if(answers[n] == std3[k]){
            count[2]++;
        }
        i++;
        j++;
        k++;
    }
    let a = count[0];
    let b = count[1];
    let c = count[2];
    if (a >= b && a >= c) {
        //a가 최대
        if(a != 0) {
            answer.push(1);
            if(a == b) {
                //b도 최대
                answer.push(2);
            }
            if(a == c) {
                //c도 최대
                answer.push(3);
            }
        }

    } else if (b >= a && b >= c) {
        //b가 최대
        if (b != 0) {
            answer.push(2);
            if(b == a && b != c) {
                answer.pop();
                answer.push(1);
                answer.push(2);
            }

            if(b == c && b != a) {
                answer.push(3);
            }

            if(a == b && b == c) {
                answer.pop();
                answer.push(1);
                answer.push(2);
                answer.push(3);
            }
        }

    } else if (c >= a && c >= b) {
        //c가 최대
        if (c != 0) {
            answer.push(3)
            if(c == a && c != b) {
                answer.pop();
                answer.push(1);
                answer.push(3);
            }

            if(c == b && c != a) {
                answer.pop();
                answer.push(2);
                answer.push(3);
            }

            if(a == c && b == c) {
                answer.pop();
                answer.push(1);
                answer.push(2);
                answer.push(3);
            }
        }

    }

    return answer;
}

solution(answers);
console.log(solution(answers));
// https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
// lv1 키패드 누르기

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

// result = "LRLLRRLLLRR"
function solution(numbers, hand) {
    let answer = [];
    const leftpad = [1,4,7];
    const midpad = [2,5,8,11];
    const rightpad = [3,6,9]
    let lefth = 10;
    let righth = 12;
    
    //numbers의 숫자가 왼/오른 패드일때 거길 체크하고 
    //hands 주어지니까..
    //리턴은 결국 LR만 기록해서 주면됨
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) {
            numbers[i] = 11;
        }
        //왼손 패드일때
        for (let j = 0; j < leftpad.length; j++) {
            if (numbers[i] == leftpad[j]) {
                answer.push('L');
                lefth = leftpad[j];
                break;
            }
        }
        //오른손 패드일때
        for (let k = 0; k < rightpad.length; k++) {
            if (numbers[i] == rightpad[k]) {
                answer.push('R');
                righth = rightpad[k];
                break;
            }
        }
        //중간일때
        for (let h = 0; h < midpad.length; h++) {
            if(numbers[i] == midpad[h]) {
                let lefttemp = Math.abs(midpad[h] - lefth); // 1
                let righttemp = Math.abs(midpad[h] - righth); // 10
                let leftdis = 0;
                let rightdis = 0;

                //절대값이 1 일때 거리는 1
                if (1 == lefttemp) {
                    leftdis = 1;
                }
                if (1 == righttemp) {
                    rightdis = 1;
                }
                
                //절대값이 3일때 거리는 1
                if (3 == lefttemp) {
                    leftdis = 1;
                }
                if (3 == righttemp) {
                    rightdis = 1;
                }
                //절대값이 6 일때 거리는 2
                if (6 == lefttemp) {
                    leftdis = 2;
                }
                if (6 == righttemp) {
                    rightdis = 2;
                }
                //절대값이 9일때 거리는 3
                if (9 == lefttemp) {
                    leftdis = 3;
                }
                if (9 == righttemp) {
                    rightdis = 3;
                }
                //절대값이 2,4 일때 거리는 2
                if (2 == lefttemp || lefttemp == 4) {
                    leftdis = 2;
                }
                if (2 == righttemp || righttemp == 4) {
                    rightdis = 2;
                }
                //절대값이 5,7 일때 거리는 3
                if (5 == lefttemp || lefttemp == 7) {
                    leftdis = 3;
                }
                if (5 == righttemp || righttemp == 7) {
                    rightdis = 3;
                }
                //절대값이 8,10 일때 거리는 4
                if (8 == lefttemp || lefttemp == 10) {
                    leftdis = 4;
                }
                if (8 == righttemp || righttemp == 10) {
                    rightdis = 4;
                }
                //0일때
                if (lefttemp == 0 && righttemp != 0) {
                    lefth = midpad[h];
                    answer.push('L');
                    break;
                }
                if (righttemp == 0 && lefttemp != 0) {
                    righth = midpad[h];
                    answer.push('R');
                    break;
                }
                if (lefttemp == 0 && righttemp == 0) {
                    if (hand = 'left') {
                        lefth = midpad[h];
                        answer.push('L');
                        break;
                    } else if (hand = 'right') {
                        righth = midpad[h];
                        answer.push('R');
                        break;
                    }
                }
                 
                if (leftdis < rightdis) {
                    lefth = midpad[h];
                    answer.push('L');
                    break;
                } else if (rightdis < leftdis) {
                    righth = midpad[h];
                    answer.push('R');
                    break;
                } else if (leftdis == rightdis) {
                    if (hand == 'left') {
                        lefth = midpad[h];
                        answer.push('L');
                        break;
                    } else if (hand == 'right') {
                        righth = midpad[h];
                        answer.push('R');
                        break;
                    }
                }
            }
        }
        
    }
    let string = answer.join('');
    return string;
}
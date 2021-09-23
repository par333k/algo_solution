/*
 * 10 부제
 * 자동차 10부제 시행, 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리숫자가 일치하면 차량 운행 금지
 * 10부제를 위반하는 자동차의 대수를 세어라
 * 날짜의 일의자리 숫자가 주어지고, 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때
 * 위반하는 자동차의 대수.
 */
function solution(day, arr){
    let answer=0;
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i]%10;
        if(day === num) {
            answer++;
        }
    }
    return answer;
}

arr=[25, 23, 10, 47, 53, 17, 33];
console.log(solution(0, arr));

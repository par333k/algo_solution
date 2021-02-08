// https://programmers.co.kr/learn/courses/30/lessons/49993
// 스킬트리 문제

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
function skillchk(skill, skill_tree) {//제대로된거면 1리턴 아니면 0리턴으로 합하면 답
    //문자열 순서대로 도니까 인덱스를 대소비교하면됨
    let idx = -1;
    //스킬을 문자열에서 못찾는지 체크
    let check = false;
    // 순서대로 문자열을 돌았는데 없으면 다음 스킬이 찾아지면 안되니까 얘로 체크
    let find = false;
    for (let i = 0; i < skill.length; i++) {
        for (let j = 0; j < skill_tree.length; j++) {
            if(skill[i] == skill_tree[j]) {
                if(!find && idx < j) { //앞에서 찾은 인덱스가 얘보다 작아야만 순서가 맞음
                    idx = j;
                    check = true;
                    break;
                } else { //이전스킬을 안배웠는데 다음스킬이있거나 순서가 안맞으면 0리턴
                    return 0;
                }
            } else { //맞는거없으면 false
                check = false;
            }
        }
        if (check == false) { //다 돌았는데도 얘가 false야? 그럼 break 한번도 안걸린거고 다음 문자를 찾으면 안됨 앞문자가 무조건있어야하니까
            find = true;
        }
    }
    //retun 0  조건에 안걸렸다는건 순서가 맞고 스킬이 있었다는거, 아예 없는 조건과 순서안맞는 조건은 걸러짐
    return 1;
}


function solution(skill, skill_trees) {
    let answer = 0;
    for (let s of skill_trees) {
        answer += skillchk(skill, s);
    }
    return answer;
}

console.log(solution(skill, skill_trees));
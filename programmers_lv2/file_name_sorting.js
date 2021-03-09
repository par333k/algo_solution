// https://programmers.co.kr/learn/courses/30/lessons/17686#
// lv2 [3차]파일명 정렬

const files = ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"];

// result = ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"];
function solution(files) {
    // 파일명을 head, number, tail로 분리한다
    // 첫 숫자 이전까지가 head
    // 숫자 부분이 number
    // 숫자가 끝나면 다음문자가 tail
    // head 기준으로 1차 정렬(대소문자 비교안함)
    // number 기준으로 2차 정렬(012가 12와 같음)
    // head와 number 가 같을 경우 정렬하지않음
    // tail이 없는 경우 고려해야함
    files.sort((a, b) => {
        const value = (file) => {
            let header;
            let number;
            let tail;

            for(let j = 0; j < file.length; j++) {
                if(file[j].charCodeAt() >= 48 && file[j].charCodeAt() <= 57) {
                    for(let k = j; k < file.length; k++) {
                        if(file[k].charCodeAt() < 48 || file[k].charCodeAt() > 57) {
                            number = file.substring(j, k);
                            break;
                        }
                    }
                    header = file.substring(0, j);

                    if (!number) {
                        number = file.substring(j);
                    }
                    break;
                }
            }
            return [header.toLowerCase(), Number(number)];
        }

        const a_header = value(a)[0];
        const a_number = value(a)[1];
        const b_header = value(b)[0];
        const b_number = value(b)[1];

        if(a_header < b_header) {
            return -1;
        } else if (a_header > b_header) {
            return 1;
        } else {
            return a_number - b_number;
        }

    })

    return files;
}
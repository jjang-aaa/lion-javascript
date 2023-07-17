/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log(extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
//slice([begin[, end]]) -> end : -1을 지정하면 맨 마지막 스트링 제외,[,end]는 생략가능을 의미
let slice = message.slice(8, -1);
console.log(slice);

let subString = message.substring(1, 3);
console.log(subString);

// 얘는 잘 안쓰니까 쓰지말라고 줄까지 끄어짐 ㅋㅋ
let subStr = message.substr(1, 3);
console.log(subStr);

/* ---------------------------------------------------------------------- */
// 문자열 포함 여부 확인

// 앞에서 부터 찾고 문자가 있는지 알려주고 없으면 -1, 있으면 그 문자의 인덱스를 반환함
let indexOf = message.indexOf('L');
console.log(indexOf);

// 얘는 뒤에서 탐색해서 찾으면 그 문자의 인덱스를 반환함
let lastIndexOf = message.lastIndexOf('s');
console.log(lastIndexOf);

let includes = message.includes('good');
console.log(includes);

// 해당 문자부터 시작해?하고 묻는 것, end는 반대
let startsWith = message.startsWith('Less');
console.log(startsWith);

let endsWith = message.endsWith('.');
console.log(endsWith);

/* ---------------------------------------------------------------------- */
// 공백 잘라내기
// 얘는 문자 왼쪽, 오른쪽, 양옆의 공백을 없애줌, 문자 안의 공백은 처리해주지 않음
// 문자가 다 가로로 쓰이지 않고 아랍어는 세로로쓰여서 start, end로 바뀌는 중 (접근성), 그래서 줄 쳐짐
let str = '       안 녕 반 가 워      ';

let trimLeft = str.trimLeft();
console.log(trimLeft);

let trimRight = str.trimRight();
console.log(trimRight);

let trim = str.trim();
console.log(trim);

// 글자 안에 공백을 다 제거할 경우 ? 왜 안돼?
function normalText(str) {
  return str.replace(/\s*/g, '');
}
normalText(str);

/* ---------------------------------------------------------------------- */
// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;

/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  Position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'dkanfjgrpsk',
  name: 'jeong-a',
  email: 'jadoit473@gmail.com',
  inSignIn: true,
  permission: 'paid', // free 무료사용자 | paid 결제한 사용자
};

// console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log(authUser.uid);
// console.log(authUser.permission);
// console.log(authUser.name);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['permission']);
// console.log(authUser['email']);
// console.log(authUser['name']);

// 계산된 프로퍼티 (coputed property)
let calculateProperty = 'phone'; // phone | tel

// function createUser() {

//   return {
//     name:
//   }

// createUser();

// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true;

// 프로퍼티 나열
// 아덜유저 객체에다가 네임을 넣으면 네임은 리무브 되는 형태로 나오게 만들어라?
// 근데   authUser.name = null; 이거 넣어서? 와 나 하나도 못만들겠어 ㅠㅠ

// 프로퍼티 제거 or 삭제

// 제거 코드
function removeProperty(object, key) {
  object[key] = null;

  return object;
}

console.log(removeProperty(authUser, 'name'));

// 삭제 코드
function deleteProperty(object, key) {
  delete object[key];

  return object;
}

console.log(removeProperty(authUser, 'email'));

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 그냥 그대로 쓰면 된다~

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  return Object.keys(object).length === 0; // 이거 넣어도 되구 안넣어도 되구 -> ? true : false
}

isEmptyObject(authUser);

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

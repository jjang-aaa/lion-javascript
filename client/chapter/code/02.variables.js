// 변수가지고 놀기 문제
let admin;
let name;

//참조에 의한 복사

name = 'John';
admin = name;

name = 'dodo';
console.log(admin);

//올바른 이름 선택하기 문제
const planet = 'earth';
const crrentOnlineUserName = 'tigger';

/* ------------------ */
/* Variables          */
/* ------------------ */

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
// - 구매 제품 가격의 총 합
// - 1년 기준 일(day)자 수
// - 구매 결제 여부
// - 구매 결제 내역
// - 브랜드 접두사
// - 오늘의 운세
// - 상품 정보

/* variables ----------------------------------------------------------- */
// - Calculate product price by quantity
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalCost;
//-> 선생님 let totalProductPrice;

// - 1년 기준 일(day)자 수
let 뭘까;
// -> 선생님 const DAY_PER_YEAR =365; 1년은 변하지 않으니까 찐상수 사용

/* - 구매 결제 여부(했어 안했어, 있어 없어) -> 여부는 대부분 is로 처리하는 경우가 관례같은 것 */
let buy;
// let isPayment = false;
/* 가지고 있어 없어?
let hasClassName =ture; */

// - 오늘의 운세
let toDayLucky;
// 선생님 -> let

/* constant variables -------------------------------------------------- */
// - 구매 결제 내역
const RECEIPT = 'anything';
// 선생님 -> let paymentHistory; 변수냐 상수냐만 따지면 let

// - 브랜드 접두사
const BRAND = 'nike';
// 선생님 -> const BRAND_PREFIX

// - 상품 정보
const productInformation = 'blabla';
// 선생님과 같음

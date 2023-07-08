/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/*
console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);
*/

/*
// 함수 선언
function calcPrice(
  priceA,
  priceB,
  priceC = 0,
  priceD = 0
) {
  //priceC ||= 0;
  priceC ??= 30; //값이 없으면 뒤에껄 넣고 있으면 그거 넣어줘
  // if (!priceC) priceC = 0; 값이 없을 때 주로 이렇게 쓸 수 있음

  // if (typeof priceC === 'undefined') {
  //   priceC = 0;
  // }
  return priceA + priceB + priceC + priceD;
}

// 선생님 코드
function calcSumPrice(
  priceA, 
  priceB, 
  priceC = getRandomValue(), 
  priceD = getRandomValue()){
    if(!priceA){
      throw new Error('calcPrice 함수의 첫 번째와 두 번째 매개변수는 필수 입력 값 입니다.')
    }
    //사용자가 문자를 입력했을 경우의 validation도 필요
  return priceA + priceB + priceC + priceD;
}
const result = calcSumPrice(10000, 3500)// 함수 호출
console.log(result);

// 함수 호출


const result = calcPrice(10000, 3500, 5000);
console.log(result);


function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}
*/

// 함수 선언

/*
function calcPrice(
  priceA,
  priceB,
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // priceC ||= 10;
  // priceC ??= 10;

  // if(!priceC) priceC = 0;
  // if(typeof priceC === 'undefined'){
  //   priceC = 0;
  // }

  if (!priceA || !priceB) {
    throw new Error(
      'calcPrice 함수의 첫 번째와 두 번째 매개변수는 필수 입력 값 입니다.'
    );
  }

  return priceA + priceB + priceC + priceD;
}

const result = calcPrice(10, 30); // 함수 호출

console.log(result);
*/

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxSize, sizeNum = 16) {
  if (!pxSize)
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.');
  typeof pxSize === 'string' && (pxSize = parseInt(pxSize, 10));

  // if (typeof pxSize === 'string') {
  //   pxSize = parseInt(pxSize, 10);
  // }
  let Value = pxSize / sizeNum;

  return `${Value}rem`;
}

console.log(rem('20px'));
console.log(rem(30, 16));
console.log(rem(56, 10));

//console.assert(rem(20) === '1.25rem'); //??

// rem(20) === '1.25rem'
// rem('30px',16) === '1.875rem'
// rem('56px', 10) === '5.6rem'

//에러코드 현주님꺼
// function rem(pxValue, base=16){
//   if (!pxValue){
//     throw new Error('rem 함수의 픽셀 값은 필수 입력 값 입니다.')
//   }
//   let result = parseInt(pxValue)/base;
//   return result+'rem'
// }

// css(node: string, prop: string, value: number|strung) : string;
let css;

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.

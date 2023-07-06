/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let aa = 10;
let bb = '';
let value = Boolean(bb);

// 논리곱(그리고) 연산자
let AandB = aa && bb;

// 논리합(또는) 연산자
let AorB = aa || bb;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && '  ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsFalsy: true };

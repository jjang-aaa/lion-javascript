/* ---------------------------------------------------------------------- */
/* While Loop                                                */
/* ---------------------------------------------------------------------- */

// let repeat = 0;
// while (repeat <= 10) {
//   console.log(repeat);
//   repeat++;
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i];

  console.log(value);

  i++;
}
// 코드가 길어지면 변수에 담아서 쓰는 것을 권장함, 왜 바로 생각이 안들까 ㅠㅠ

// while 문 (역순환 : 역방향)

let l = frontEndDev.length;
while (l > 0) {
  let value = frontEndDev[l];

  console.log(value);

  l--;
}
// 아 반대로 생각하는데 --는 생각 못했네ㅠ 감소시키는거...
// 성능 진단 : 순환 vs. 역순환

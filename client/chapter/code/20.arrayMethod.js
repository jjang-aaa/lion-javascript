/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
/*
const isArray = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

function nomalIsArray(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const isNull = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

function normalIsNull(data) {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null'
  );
}

const arr = [10, 100, 1000, 10000];
*/

const people = [
  {
    id: 0,
    name: '김다연',
    profession: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'MAksd23',
  },
  {
    id: 1,
    name: '이현주',
    profession: '수영선수',
    age: 40,
    imageSrc: 'afdfakA',
  },
  {
    id: 2,
    name: '김희소',
    profession: '물음표살인마',
    age: 30,
    imageSrc: 'fAKqi321',
  },
  {
    id: 3,
    name: '김규민',
    profession: '래퍼',
    age: 52,
    imageSrc: 'AFGq3d23',
  },
  {
    id: 4,
    name: '전진승',
    profession: '드라마평론가',
    age: 18,
    imageSrc: 'fQa15f3',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// const sill

// (새로운 기능)
// toSorted
// toReversed
// toSpliced
// const toSpliced = arr.toSpliced;
// console.log;

// map 중요

//console.log(job);

const job = people.map((item, index) => {
  return /* html */ `
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `;
});

job.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item) => {
  return item.name === '김희소';
});

console.log(find);

// findIndex

const findIndex = people.findIndex((item) => {
  return item.id === 3;
});

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item) => {
  return item.id > 2;
});

console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce 문자를 접합해서 사용험
const totalAge = people.reduce((acc, cur) => {
  return acc + cur.age;
});

console.log(totalAge);

// console.log(totalAge)
const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name}</div>`,
  ''
);

document.body.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */
const str = '봉석 윤진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');

console.log(stringToArray);

// join
const ToArray = str.join(' ');

/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// const animal = {
//   legs: 4,
//   tail: true,
//   stomach: [],
//   /* setter
//   eat(food) {
//     this.stomach.push(food);
//   } -> */
//   set eat(food) {
//     this.stomach.push(food);
//   },
//   /* getter
//   getEat() {
//     return this.stomach;
//   } -> */
//   get eat() {
//     return this.stomach;
//   },
// };

// /* 저렇게 쓰면 네이밍 많이 할 필요 없음, 보이기에는 함수같지만 객체에 프로퍼티를 추가하는 것처럼 동작함, animal.eat = '사료'/ animal.eat -> [사료] 라고 값이 있으면 set, 없으면 get으로 바로 쓸 수 있음 */

// const tiger = {
//   pattern: '호랑이무늬',
//   prey: '',
//   hunt(target) {
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`;
//   },
// };
// tiger.__proto__ = animal;

// const fox = {
//   prey: '',
// };
// fox.__proto__ = animal;

/* ---------------------------------------------------------------------- */

// 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  (this.tail = true),
    (this.eat = function (food) {
      this.stomach.push(food);
    });
  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};

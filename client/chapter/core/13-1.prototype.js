/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  get eat() {
    return this.stomach;
  },
  set eat(food) {
    this.stomach.push(food);
  },
};

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    console.log(`${target}사냥성공`);
    this.eat = target;
  },

  __proto__: animal,
};
// 생성자 함수
function Animal() {
  this.legs = 4;
  (this.tail = true),
    (this.getEat = function () {
      return this.stomach ?? '배고파요';
    }),
    (this.setEat = function (food) {
      this.stomach = [];
      this.stomach.push(food);
    });
}

function Tiger(name) {
  this.name = name;
  this.pattern = '호랑이 패턴';
  this.hunt = function (target) {
    console.log(`${target} 사냥`);
    this.stomach.push(target);
  };
}

const a = new Tiger('금순이');

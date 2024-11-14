/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> class syntax

class Animal {
  legs = 4;
  tail = true;
  #name = 'unknown';

  constructor(name) {
    // 최초 1회만 실행 -> 초기화
    this.#name = name;
    this.stomach = [];
    console.log(this.#name);
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const options = {
  version: '1.0.0',
  company: '8b-studio',
  ceo: '심선범',
};

class Tiger extends Animal {
  static defaultProps = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이 무늬';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  }

  static bark(sound) {
    return sound + '🐯';
  }
}

// const a = new Animal('몽실이');
const 호랑이 = new Tiger('호돌이');

// const arr = new Array()

// arr.forEach()

// Array.isArray()

// class Array extends Object(){

//   forEach(){

//   }

//   reduce(){

//   }

//   static isArray(){

//   }
// }

class Button {
  constructor(selector) {
    this.btn = document.querySelector(selector);
    this.cnt = 0;
    this.attachEvent();
  }

  click() {
    console.log(this);
  }

  attachEvent() {
    this.btn.addEventListener('click', this.click);
  }
}

const button = new Button('.btn');

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//   console.log('click');

//   const tag = `<div>${'clicked'}</div>`;
//   document.body.insertAdjacentHTML('beforeend', tag);
// });

// const input = prompt('자바스크립트의 \'공식\' 이름은 무엇일까요?');
// if (input === 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// const result = prompt('숫자를 입력하세요 : ');
// if (result > 0) {
//   console.log('1');
// } else if (result < 0) {
//   console.log('-1');
// } else {
//   console.log('0');
// }

// let result;
// let a = 1, b = 2;

// result = (a + b) < 4 ? result = '미만' : result = '이상';

let login = '직원';
let message =
  login === '직원'
    ? '안녕하세요.'
    : login === '임원'
      ? '환영합니다.'
      : login === ''
        ? '로그인이 필요합니다.'
        : '';

function render(node, isActive) {
  // 조건부 랜더링
  let template = `<div>${isActive ? '안녕' : '잘가'}</div>`;
  node.insertAdjacentHTML('beforeend', template);
}

let didWatch = false;
let goingToWatch = false;

let result = didWatch
  ? '그 영화 재밌더라'
  : goingToWatch
    ? '그래 같이 보러가자'
    : '어쩌라고';

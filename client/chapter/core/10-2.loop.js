/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (false);

// console.log(i);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

// let cnt = parseInt(prompt('순환 횟수를 입력하세요.'));
// do {
//   console.log(cnt);
// } while (cnt--);

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정
// let cnt = parseInt(prompt('순환 횟수를 입력하세요.'));
// let i = 0;

// do {
//   console.log(i++);
// } while (cnt--);

// const first = document.querySelector('.first');
// console.log(first);

// let first = document.querySelector('.first');

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== 1);

// console.log(first);

// const first = document.querySelector('');

// function next(node) {
//   if (typeof selector === 'string') {
//     node = document.querySelector(node);
//   }

//   do {
//     node = node.nextSibling;
//   } while (node.nodeType !== 1);
//   return node;
// }

// const second = next(first);
// const _second = next('.first');

let first = document.querySelector('.first');

function next(node) {
  // validation
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

const second = next('.first');
const _second = next(first);

// let second = document.querySelector('.second');

// function prev(node) {
//   if (typeof selector === 'string') {
//     node = document.querySelector(node);
//     console.log('여기로 왔어용');

//   }

//   console.log('여기로 왔어요');

//   do {
//     node = node.previousSibling;
//   } while (node.nodeType !== 1);
//   return node;
// }

// const first = next(second);

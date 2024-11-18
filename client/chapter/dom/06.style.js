/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const nav = getNode('nav');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

console.log(nav.className);

nav.className = 'nav';

nav.classList.toggle('is-active');

function addClass(node, val) {
  if (isString(node)) node = getNode(node);
  console.log(`${val} 추가 되었습니다`);

  node.classList.add(val);
}

function removeClass(node, val) {
  if (isString(node)) node = getNode(node);
  console.log(`${val} 삭제 되었습니다`);

  node.classList.remove(val);
}

function togleClass(node, val) {
  if (isString(node)) node = getNode(node);
  console.log('변경 되었습니다');
  return node.classList.toggle(val);
}

// togleClass('nav', 'hello');

// string
function addClass_str(node, val) {
  if (isString(node)) node = getNode(node);

  value = val.split(',');
  // console.log(value);
  value.forEach((item) => {
    node.classList.add(item);
  });
}

// addClass_str(nav, 'a,b,c,d');

// 배열
function addClass_arr(node, val) {
  if (isString(node)) node = getNode(node);

  val.forEach((item) => {
    node.classList.add(item);
  });
}

// addClass_arr(nav, ['a', 'b', 'c', 'd']);

// 객체
function addClass_obj(node, val) {
  if (isString(node)) node = getNode(node);

  // const key = Object.keys(val)
  // const value = Object.values(val)

  const entries = Object.entries(val);

  for (i of entries) {
    node.classList.add(i);
  }

  // key.forEach((item) => {
  //   node.classList.add(item);
  // });

  // value.forEach((item) => {
  //   node.classList.add(item);
  // });
}

addClass_obj(nav, { name: 'hi', age: 25, home: 'korea' });

// 매개변수 수 미지정
function addClass_arg(node, ...item) {
  if (isString(node)) node = getNode(node);

  const arr = [...item];
  arr.forEach((item) => {
    node.classList.add(...item);
  });
}

console.log(addClass_arg('nav', 'a', 'b', 'q', 'o', 'y'));

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

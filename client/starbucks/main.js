const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');

const h = (t) => {
  t.style.height = 0;
};

// header의 높이값을 가져와서 depth의 top값으로 설정.

// elem.offsetHeight

// elem.style.top

aList.forEach((a) => {
  // event binding => 'mouseenter' event => this 출력하기

  // '현재 선택'된 a태그 안에 있는 depth
  // currentTarget + lastElementChild

  // currentDepth에게 높이 주기 (100px)
  // node.style.height = ???

  // 모든 depth 높이 제거하기 (0px)
  // 모든 depth를 가져오기 => style 제거

  a.addEventListener('mouseenter', (e) => {
    const currentDepth = e.currentTarget.lastElementChild;

    depthList.forEach(h);

    currentDepth.style.height = '100px';
  });
});

// mouseleave => 원래대로

function depthTop() {
  const header = document.querySelector('#header');
  const h = header.offsetHeight;
}

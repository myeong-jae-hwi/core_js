import {
  diceAnimation,
  getNodes,
  getNode,
  insertLast,
  clearContents,
} from './lib/index.js';

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

let dice = getNode('#cube');
let data;
let total = 0;
let cnt = 0;

const recordListWrapper = getNode('.recordListWrapper');

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션이 재생 or 정지]
// 1. setInterval
// 2. clearInterval ( scope )

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
    }

    isClicked = !isClicked;
  };
})();

function render() {
  const tbody = getNode('tbody');
  data = dice.getAttribute('dice');
  total += Number(data);
  cnt += 1;

  console.log(data, total, cnt);

  const templet = `
<tr>
<td>${cnt}</td>
<td>${data}</td>
<td>${total}</td>
</tr> 
`;
  insertLast(tbody, templet);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}

function reset() {
  cnt = 0;
  data = '';
  total = 0;

  clearContents('tbody');
  recordListWrapper.hidden = true;
  console.log(cnt, data, total);
}

function handleRecord() {
  recordListWrapper.hidden = false;
  render();
}

rollingButton.addEventListener('click', handleRollingDice);

recordButton.addEventListener('click', handleRecord);

resetButton.addEventListener('click', reset);

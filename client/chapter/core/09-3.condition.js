/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 15;
//
// switch (a) {
//   case 10:
//     console.log(10);
//     break;
//   case 13:
//     console.log(13);
//     break;
//   case 15:
//     console.log(15);
//     break;
//   case 20:
//     console.log(20);
//     break;
//   default:
//     console.log('default');
// }

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime;

// thisTime = MORNING;

// switch (thisTime) {
//   case '아침':
//     console.log('졸리다');
//     break;
//   case '점심':
//     console.log('배고프다');
//     break;
//   case '저녁':
//     console.log('힘들다');
//     break;
//   case '밤':
//     console.log('졸리다');
//     break;
//   case '심야':
//     console.log('기절');
//     break;
//   case '새벽':
//     console.log('기절');
//     break;
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

// if ((thisTime = '아침')) {
//   console.log('졸리다');
// } else if ((thisTime = '점심')) {
//   console.log('배고프다');
// } else if ((thisTime = '저녁')) {
//   console.log('힘들다');
// } else if ((thisTime = '밤')) {
//   console.log('졸리다');
// } else if ((thisTime = '심야')) {
//   console.log('기절');
// } else if ((thisTime = '새벽')) {
//   console.log('기절');
// }

/* switch vs. if -------------------------------------------------------- */

// let input = +prompt('숫자를 입력해주세요');

// switch (input) {
//   case 0:
//     console.log('일요일');
//     break;
//   case 1:
//     console.log('월요일');
//     break;
//   case 2:
//     console.log('화요일');
//     break;
//   case 3:
//     console.log('수요일');
//     break;
//   case 4:
//     console.log('목요일');
//     break;
//   case 5:
//     console.log('금요일');
//     break;
//   case 6:
//     console.log('토요일');
//     break;
// }

// function randomVal() {
//   const value = Math.floor(Math.random() * 7);
//   return value;
// }

// function printAbc() {
//   console.log('printABC');
// }

// function randomGetDay() {
//   console.log('hi');
//   console.log(randomVal());

switch (randomVal()) {
  case 0:
    console.log('일');
    break;
  case 1:
    console.log('월');
    break;
  case 2:
    console.log('화');
    break;
  case 3:
    console.log('수');
    break;
  case 4:
    console.log('목');
    break;
  case 5:
    console.log('금');
    break;
  case 6:
    console.log('토');
    break;
}
// }

// randomGetDay();

/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

function discountPrice(userState, count, price) {
  let discountRate = 0;

  // 첫 구매
  if (count === 1) {
    discountRate += 0.05;
  }

  switch (userState) {
    case '비회원':
      break;

    case '일반회원':
      discountRate += 0.1;
      break;

    case '프리미엄회원':
      discountRate += 0.2;
      break;

    default:
      return '유효하지 않은 회원 상태입니다.';
  }
  if (price >= 20000) {
    discountRate += 0.05;
  }

  const discountPrice = price * (1 - discountRate);
  return discountPrice;
}

discountPrice('프리미엄회원', 1, 23500);

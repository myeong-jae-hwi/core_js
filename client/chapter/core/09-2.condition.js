// let a = true && ' ' && [] && { fal: flase };
// console.log(a);

// let id = prompt('아이디를 입력해주세요.');
// const THEMASTER = '1234';

// if (id === null) {
//   console.log('canceled');
// } else if (id.toLowerCase() === 'admin') {

//   let password = prompt('비밀번호를 입력해주세요.');
//   if (password === THEMASTER) {
//     console.log('welcome!');
//   } else {
//     console.log('wrong PW');
//   }
// } else {
//   console.log("I don't know you");
// }

function login() {
  let userName = prompt('누구십니까?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return

  if (userName.toLowerCase() === 'admin') {
    let password = prompt('비밀번호를 입력해주세요');

    if (password.toUpperCase() === 'MASTER') {
      console.log('로그인 성공');
    } else if (password === null) {
      console.log('취소됐습니다.');
    } else {
      console.log('잘못된 정보를 입력하셨습니다.');
      login();
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log('제대로된 값을 입력해주세요');
  }
}

login();

/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(`1번 문제) ${typeof empty}`); // null

// 2. 값이 할당되지 않은 상태
let undefinedValue;
console.log(`2번 문제) ${typeof ndefinedValue}`); // undefined

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let text = 'Hello, World!';
console.log(`3번 문제) ${typeof text}`); // string

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 2 ** 53 - 1;
console.log(`4번 문제) ${typeof number}`); // number

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
let bigInt = 2n ** 53n + 100n;
console.log(`5번 문제) ${typeof bigInt}`); // bigint

// 6. 참(true, yes) 또는 거짓(false, no)
let boolean = true;
console.log(`6번 문제) ${typeof boolean}`); // boolean

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
let object = {};
let arr = [];
function add(a) {
  return a;
}

console.log(`7-1번 문제) ${typeof object}`); // object
console.log(`7-2번 문제) ${typeof arr}`); // object
console.log(`7-3번 문제) ${typeof add}`); // function

// 8. 고유한 식별자(unique identifier)
let symbol = Symbol('key');
console.log(`8번 문제) ${typeof symbol}`); // symbol

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array

// function

// this

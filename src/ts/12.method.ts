const arr = [1, 2, 3];

arr.map((n) => n * 2);

function map<T, U>(arr: T[], callback: (n: T) => U): U[] {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (n) => n * 2);

function forEach<T>(arr: T[], callback: (n: T) => void): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (n) => {
  console.log(n);
});

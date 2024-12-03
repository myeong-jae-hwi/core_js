const arr = [1, 2, 3];
arr.map((n) => n * 2);
function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (n) => n * 2);
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr, (n) => {
    console.log(n);
});
export {};

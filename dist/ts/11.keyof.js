const person = {
    name: "tiger",
    age: 35,
};
function getProperty(obj, key) {
    return obj[key];
}
getProperty(person, "name"); // 'tiger'
// utility type
function validCssProperty(prop) {
    return prop in document.body.style;
}
validCssProperty("color"); // true
const product = {
    id: 1,
    name: "mac-book",
    price: 300,
};
function setProperty(product, key, value) {
    product[key] = value;
    return product;
}
setProperty(product, "price", 100); // { id:1, name:'mac-book', price:100 }
const products = [
    { name: "mac", price: 500 },
    { name: "iPhone", price: 300 },
    { name: "iPad", price: 300 },
];
function getProperties(products, key) {
    return products.map((product) => product[key]);
}
getProperties(products, "name"); // ['mac','iPhone','iPad']
export {};

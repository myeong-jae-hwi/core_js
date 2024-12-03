let unKnownValue: unknown;

if (typeof unKnownValue === "number") {
  unKnownValue.toFixed(2);
}

if (typeof unKnownValue === "string") {
  unKnownValue.toUpperCase();
}

// if (typeof unKnownValue === "Date") {
//   unKnownValue.getTime();
// }

// if (typeof unKnownValue === "object") {
//   unKnownValue.toUpperCase();
// }

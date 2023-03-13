let user = { name: '张三', age: 18 };
let salary = { grade: "A" }

let sum = { ...user, ...salary };

console.log(sum);

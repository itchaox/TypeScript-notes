type nameType = "itchao"; // 创建一个 'itchao' 的类型
// let name1: nameType = "chenchen"; // 语法报错: 不能将类型“"chenchen"”分配给类型“"itchao"”

const a111 = {
  name: "2123",
  age: 23
};

console.log(a111.name as "212", a111.age);

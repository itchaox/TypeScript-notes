/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-06 13:54:24
 * @LastEditors: wc
 * @LastEditTime: 2022-07-06 14:20:27
 */

// 1. 基本数据类型
function add(num1: number, num2: number) {
  return num1 + num2;
}

let sum1 = add(1, 20);
console.log("sum1", sum1);

// 2. 数组
// 方式一: Array<number>(不推荐)
// 不推荐原因: < > 可能与 JSX 语法中的标签冲突
const arr: Array<number> = [1234, 22312, 23];
console.log("arr", arr);

// 方式二: string[](推荐)
const arr1: string[] = ["a", "b", "c", "d", "e"];
console.log("arr1", arr1);

// 3. 对象

// 方式一: 直接使用
const obj1: { name: string; age: number } = {
  name: "itchao",
  age: 23
};

console.log("obj1", obj1);

// 方式二: type
type ObjType = {
  name: string;
  age: number;
  height: number;
};

const obj2: ObjType = {
  name: "itchao",
  age: 23,
  height: 1.85
};

console.log("obj2", obj2);

// 方式三: interface

interface INewObjType {
  name: string;
  age: number;
}

const obj3: INewObjType = {
  name: "itchao",
  age: 23
};

console.log("obj3", obj3);

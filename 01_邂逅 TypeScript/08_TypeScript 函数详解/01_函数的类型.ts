/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-04 09:46:05
 * @LastEditors: wc
 * @LastEditTime: 2022-07-04 10:06:46
 */

// 函数类型: () => void
// 表示直接声明一个没有入参和出参的函数类型

function sum(num1: number, num2: number) {
  return num1 + num2;
}

sum(1, 2);

function foo() {}

function bar(foo: () => void) {
  foo();
}

// 定义常量时,编写函数类型
type AddType = (num1: number, num2: number) => number;

const add: AddType = (num1: number, num2: number) => num1 + num2;
add(1, 3);
console.log(add(1, 3));

export {};

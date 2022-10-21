/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-21 09:57:30
 * @LastEditors: wc
 * @LastEditTime: 2022-10-21 10:38:19
 */

// 函数类型表达式: (参数列表) => 返回值
function foo(num1: number): number {
  return num1;
}

foo(10); // 成功调用
// foo("itchao"); // 语法报错: 类型“string”的参数不能赋给类型“number”的参数

type funType = (num1: number) => number;
const bar: funType = (num1: number): number => num1;

// 练习:

type calcFnType = (num1: number, num2: number) => number;

function calc(calcFn: calcFnType) {
  let num1 = 10;
  let num2 = 20;

  let res = calcFn(num1, num2); // 计算
  console.log(res); // 打印结果
}

// 两数求和
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// 两数相减
function reduce(num1: number, num2: number): number {
  return num1 > num2 ? num1 - num2 : num2 - num1; // 返回大数减小数
}

calc(add); // 两数求和
calc(reduce); // 两数相减

// 匿名函数: 可以根据上下文进行类型推导, 一般不需要进行类型限制
calc(function (num1, num2) {
  return num1 + num2;
});

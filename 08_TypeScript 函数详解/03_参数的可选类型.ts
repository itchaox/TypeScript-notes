/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-04 10:48:11
 * @LastEditors: wc
 * @LastEditTime: 2022-07-04 10:51:52
 */

// ?: 参数可选类型
// 参数可选类型不能出现在参数必选类型的前面
function foo(num1: number, num2?: number) {
  console.log(num1);
  if (num2) {
    console.log(num2);
  }
}

foo(2); // 一个参数
foo(2, 3); // 二个参数
// foo("2"); // 错误传参

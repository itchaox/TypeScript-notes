/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-04 10:53:13
 * @LastEditors: wc
 * @LastEditTime: 2022-07-04 10:58:45
 */

// y: number = 100 参数默认值
// 建议书写顺序:必传参数 - 有默认值参数 - 可选参数

function sum(num1: number, num2: number = 100) {
  return num1 + num2;
}

let s1 = sum(10);
console.log(s1);

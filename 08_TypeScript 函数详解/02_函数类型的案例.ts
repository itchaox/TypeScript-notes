/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-04 10:09:20
 * @LastEditors: wc
 * @LastEditTime: 2022-07-04 10:46:28
 */

function calc(n1: number, n2: number, foo: (n1: number, n2: number) => number) {
  return foo(n1, n2);
}

let res1 = calc(10, 20, (n1, n2) => n1 + n2);
console.log("res1", res1);

let res2 = calc(123, 2123, (n1, n2) => n1 - n2);
console.log("res2", res2);

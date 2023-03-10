/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-01 13:40:31
 * @LastEditors: wc
 * @LastEditTime: 2022-12-05 09:00:12
 */

function foo<T>(p: T) {
  return p;
}

let p1 = foo<number>(1);
let p2 = foo("name");
let p3 = foo({ name: "itchao" });

function bar<T, P>(p1: T, p2: P): [T, P] {
  return [p1, p2];
}

let a1 = bar(1, "itchao");
a1[0];

function sum<T1, T2>(num1: T1, num2: T2): number {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
}

sum(1, 2);

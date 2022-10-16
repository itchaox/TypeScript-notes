/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-06 16:07:25
 * @LastEditors: wc
 * @LastEditTime: 2022-07-06 16:24:49
 */

function foo<Number, String>(arg1: Number, arg2: String) {
  console.log(arg1, arg2);
}

// 方式一: 直接定义类型
foo<number, string>(1, "name");

// 方式二:通过自动类型推导
foo(1232, 332131);

export {};

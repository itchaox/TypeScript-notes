/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-06 15:24:24
 * @LastEditors: wc
 * @LastEditTime: 2022-07-06 16:00:44
 */

// 类型参数化

// 定义时不确定类型,使用时才确定类型

function foo<T>(param1: T, param2: T) {
  console.log("---", param1, param2);
  // return num1 + num2;
}

// 方式一: 直接传入参数类型
foo<number>(20, 30);

// 方式二:通过自动类型推导
foo("my name is", "auto type infer!!!");

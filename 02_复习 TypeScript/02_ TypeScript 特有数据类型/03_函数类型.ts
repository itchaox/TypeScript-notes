/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-16 23:09:23
 * @LastEditors: wc
 * @LastEditTime: 2022-10-16 23:15:55
 */

// 目标: 声明一个求和函数, 入参为两个数值类型的参数, 返回值为一个数值类型的值

/**
 * 注意:
 * 1. 返回值可以不直接写出来, 因为可以通过类型推导出返回值类型
 * 2. 但是返回值直接写出来可以提高代码可读性, 例如封装第三方工具库等, 经常把返回值类型直接写出来
 */

function sum(num1: number, num2: number): number {
  return num1 + num2
}

sum(123, 321) // 成功调用
// sum("123", "321") // 失败调用: 入参类型不正确

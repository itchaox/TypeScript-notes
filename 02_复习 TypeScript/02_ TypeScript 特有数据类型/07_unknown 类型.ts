/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-17 22:15:05
 * @LastEditors: wc
 * @LastEditTime: 2022-10-17 22:25:05
 */

/**
 * 注意:
 * 1. unknown 类型与 any 类型很相似, 都能使用任意类型进行赋值
 * 2. any 类型可以进行任意操作, 如字符串访问 length 属性 / 对象调用方法等
 * 3. 但是 unknown 类型不能进行任意操作, 如字符串访问 length 属性 / 对象调用方法等
 * 4. unknown 类型可以进行操作方式: 类型缩小, 然后可以针对该类型进行对应操作
 */

let title: unknown = "123"

// console.log(title.length) error: unknown 类型上不存在 length 属性

title = 123 // unknown 类型可以进行任意赋值

// unknown 类型可以进行操作方式: 类型缩小

title = "itchao"

// 类型缩小
if (typeof title === "string") {
  console.log(title.length)
}

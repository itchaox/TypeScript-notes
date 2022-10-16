/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-16 22:37:15
 * @LastEditors: wc
 * @LastEditTime: 2022-10-16 22:39:22
 */

// 目标: 1. 编写一个对象,有字符串类型的[名字属性]和数字类型的[年龄属性]

// type 关键字, 用于声明类型
type objectType = {
  name: string
  age: number
}

let obj: objectType = {
  name: "wang",
  age: 23,
}

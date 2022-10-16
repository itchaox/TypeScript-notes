/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-16 19:06:40
 * @LastEditors: wc
 * @LastEditTime: 2022-10-16 19:18:03
 */

/**
 * 类型推导:
 * 1. let 声明时, 类型推导出__基本类型
 * 2. const 声明时, 类型推导出__字面量类型
 */

let name = "123" // 类型推导出, name 类型为 string
name = "wangChao"

let year // 未初始化赋值, 无法进行类型推导, 所以 year 的类型为 any

const age = 123 // 类型推导出, 字面量类型 '123'

export {}

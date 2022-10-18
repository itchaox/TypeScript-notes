/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-17 22:00:32
 * @LastEditors: wc
 * @LastEditTime: 2022-10-17 22:11:35
 */

// any 类型作用: 在类型不确定时, 使类型可变, 可以进行任意操作, 类似 JavaScript 无类型限制(一般情况下尽量少用)

// 类型推导示例:
let token = "123"

// token = 123 // error: 不能将 number 类型分配给 string 类型

// any 类型示例:

let appId: any = "123"

appId = "234" // 成功调用: any 类型可赋值为任意类型
appId = 123 // 成功调用: any 类型可赋值为任意类型

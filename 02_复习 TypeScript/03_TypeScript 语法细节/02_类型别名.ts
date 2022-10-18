/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-18 21:40:19
 * @LastEditors: wc
 * @LastEditTime: 2022-10-18 21:46:40
 */

// 目标: 创建一个 nameType, 使其可以是 number 或 string 类型

// type 关键字, 用于声明类型别名

type nameType = number | string

function watchName(name: nameType) {
  console.log(name)
}

watchName("itchao") // 成功调用: nameType 中类型可为 string
watchName(23) // 成功调用: nameType 中类型可为 number

// 目标: 创建一个 objType, 该对象拥有2个属性, 其一 title 属性且类型为 string, 其二 count 属性且类型为 number

type titleType = {
  title: string
  count: number
}

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-18 22:05:02
 * @LastEditors: wc
 * @LastEditTime: 2022-10-18 22:18:39
 */

// 目标: 使用 interface 接口声明一个 person 对象类型, 该对象包含两个属性, 其一是 title 属性且类型为 string, 其二为 count 属性且类型为 number

/**
 * 注意:
 * 1. interface 接口声明 与 type 类型别名很相似, 都能为对象声明类型
 * 2. 但是 interface 只能给对象定义类型, 但 type 可以给联合类型/number 等定义类型, type 类型别名使用范围更广
 * 3. type 不能重复定义同一个对象名, 如果定义同一个对象名会报错
 * 4. interface 可以定义同一个对象名, 且 interface 在声明对象时有更多扩展性
 * 5. 所有在开发中如果声明对象类型则建议使用 interface, 声明非对象类型则使用 type
 * 6. 接口声明时, 对象类型建议用 I 开头
 */

// interface 写法:
interface IPerson {
  title: string
  count: number
}

// 以下代码可正常运行, 代表 interface 可重复声明同一对象名, 且后续声明相当于对前面的类型进行补充
interface IPerson {
  age: number
}

// type 写法:
type personType = {
  title: string
  count: number
}

// 以下代码报错: 不能重复声明 personType 类型
// type personType = {
//   age: number
// }

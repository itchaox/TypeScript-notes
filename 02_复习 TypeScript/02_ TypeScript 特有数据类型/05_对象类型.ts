/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-17 21:53:41
 * @LastEditors: wc
 * @LastEditTime: 2022-10-17 21:55:22
 */

type objType = {
  name: string
  age: number
}

function info(obj: objType) {
  console.log(obj.name, obj.age)
}

info({ name: "itchao", age: 23 }) // 成功调用

// info({ name: 123, age: 123 }) error: 不能将 number 类型分配给 string 类型

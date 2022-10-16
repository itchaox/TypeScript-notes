/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-15 16:57:07
 * @LastEditors: wc
 * @LastEditTime: 2022-10-15 18:19:13
 */

/**
 * 目的: 创建一个函数, 接受一个参数且该参数有 length 属性, 然后 return this params's length
 */

function getLength(param: string) {
  console.log(param.length)
}

getLength("222")

// 以下均报错: 该函数要求传入一个参数, 且参数类型为 string
// getLength([])
// getLength(123)
// getLength()

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-18 15:54:44
 * @LastEditors: wc
 * @LastEditTime: 2022-10-18 16:11:32
 */

// 目标: 编写一个打印 id 的函数, 入参类型为 string 或 number

function printId(id: number | string) {
  console.log("打印 id:", id);

  // 使用需注意, 要使用类型缩小
  if (typeof id === "string") {
    console.log(id.length); // 此处 id 类型肯定为 string
  } else {
    console.log(id); // 此处 id 类型肯定为 number
  }
}

printId("itchao"); // 调用成功: 入参类型为 string
printId(23); // 调用成功: 入参类型为 number

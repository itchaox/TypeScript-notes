/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-18 15:24:30
 * @LastEditors: wc
 * @LastEditTime: 2022-10-18 15:45:20
 */

/**
 * tuple 与 array 类似
 * 1. tuple 可以存放不同类型的数据, 并明确定义各个数据类型
 * 2. array 不建议存放不同类型数据, 如果存放不同类型数据时, 类型只能限制为 any
 * 3. tuple 常见使用场景: 函数返回值
 */

// let arrayData = ["itchao", 23, 1.85]; // 类型推导: (string | number)[]
// arrayData[0]; // 访问时, 不能明确知道对应数据的数据类型

// let tupleData: [string, number, number] = ["itchao", 23, 1.85]; // 元组类型: 明确限定对应位置的数据类型
// tupleData[0]; // 访问时, 能明确知道该位置数据类型为 string

// tuple 类型练习
// 目标: 封装部分 useState 函数

function useState<T>(initValue: T): [T, (newValue: T) => void] {
  let init = initValue;

  function change(newValue: T) {
    init = newValue;
  }

  return [init, change];
}

const [myName, setMyName] = useState("itchao"); // 明确知道, myName 类型是 string; setMyName 类型是 (newValue: string) => void
const [age, setAge] = useState(23); // 明确知道, age 类型是 number; setAge 类型是 (newValue: number) => void

// 语法: 使用 & 把两个或多个类型进行交叉

// type newType = number & string // 这样定义新类型是无意义的, 因为一个类型不可能既是数字又是字符串

/**
 * 注意:
 * 1. 交叉类型多用于两个或多个对象类型的交叉
 */

interface IPerson {
  name: string
  age: number
}

interface IClass {
  title: string
}

const info: IPerson & IClass = {
  name: "itchao",
  age: 23,
  title: "111",
}

export {}

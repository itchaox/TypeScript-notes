/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-01 14:51:47
 * @LastEditors: wc
 * @LastEditTime: 2022-11-01 14:57:47
 */

interface ILength {
  length: number;
}

// extends 类型约束
function getLength<T extends ILength>(arg: T) {
  return arg;
}

// const an1 = getLength(12); // err: 类型“number”的参数不能赋给类型“ILength”的参数
const c1 = getLength("123213");

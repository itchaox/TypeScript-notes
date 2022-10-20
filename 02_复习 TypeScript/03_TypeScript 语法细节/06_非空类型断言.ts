/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-20 16:14:33
 * @LastEditors: wc
 * @LastEditTime: 2022-10-20 16:52:24
 */

// 非空类型断言作用: 相当于直接告诉 ts 这里不用进行类型检查
// 使用场景: 在直接访问一个可选类型时会报错, 使用非空类型断言, 相当于自己确定这个可选类型是一定有值的, 让 ts 跳过类型检查

interface IPerson {
  name: string;
  friend?: {
    name: string;
  };
}

const p1: IPerson = {
  name: "itchao",
  friend: {
    name: "chenchen"
  }
};

// 1. 访问属性值
// console.log(p1.friend.name); // 语法错误: 对象可能为“未定义”
/**
 * 问题: 上面的代码直接访问会报错
 * 原因: IPerson 类型中, friend 是可选属性. 所以直接访问时, 可能出现 friend 属性不存在的情况
 * 解决方式: 1. 利用可选链 ?. 如: p1.friend?.name 2. 使用非空类型断言 !. 如: p1.friend!.name
 */

// 2. 设置属性值
// p1.friend?.name = "chao"; // 语法错误: 可选链不能在设置属性值时使用
// 正确做法: 使用非空类型断言
p1.friend!.name = "chen";

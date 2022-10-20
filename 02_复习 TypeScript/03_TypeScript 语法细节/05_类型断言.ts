/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-20 16:14:22
 * @LastEditors: wc
 * @LastEditTime: 2022-10-20 16:34:07
 */

/**
 * 类型断言作用:
 * 1. 让类型从宽泛类型变成更加具体的类型 eg: string -> 'itchao'
 * 2. 让类型从具体类型变成更加宽泛的类型 eg: 'itchao' -> string
 * 3. 普通类型之间不能相互转换 eg: string -> number, 这样的类型转换是错误的
 */

// 1. 宽泛 -> 更具体:
// 错误写法:
// const divEl = document.querySelector("div"); // 类型可能是 HTMLDivElement | null
// console.log(divEl.width); // 访问报错: divEl 可能是 null, 不能直接调用

// 正确写法
const imgEl = document.querySelector("img") as HTMLImageElement; // 类型被限制为只能是 HTMLImageElement
console.log(imgEl.width); // 访问正确

// 2. 具体 -> 更宽泛:
const nameTitle = "itchao" as string;

// 3. 不同类型之间转换(错误写法)

// const title31 = "itchao" as number; // 类型 "string" 到类型 "number" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 "unknown"

// 4. 不同类型之间转换(虽然语法检查能通过, 但不推荐!)
const stringToNumber = "itchao" as any as number;

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-16 22:22:30
 * @LastEditors: wc
 * @LastEditTime: 2022-10-16 22:29:34
 */

// 目标: 1. 字符串数组 2. 数字数组

/**
 * 写法:
 * 1. (常用写法) 数据类型[], 如: string[], 表示一个数组内的元素必须都是字符串类型
 * 2. Array<泛型>, 如: Array<number>, 表示一个数组中的元素必须都是数字类型
 */

// 注意: 实际开发中, 数组中基本上都是存放相同类型的元素

// 示例如下:
let stringArray1: string[] = ["wang", "xiang", "chao"]
let stringArray2: Array<string> = ["wang", "xiang", "chao"]

let numberArray1: number[] = [123, 122, 133]
let numberArray2: Array<number> = [123, 122, 133]

// 特例:
let anyArray1: any[] = [123, "123", true]
let anyArray2: Array<any> = [123, "123", true]

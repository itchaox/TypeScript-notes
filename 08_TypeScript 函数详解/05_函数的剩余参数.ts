/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-04 10:59:27
 * @LastEditors: wc
 * @LastEditTime: 2022-07-04 11:08:06
 */

// ...numList 函数的剩余参数(有其他参数时,剩余参数只能放在最后)
function add(...numList: number[]) {
  return console.log(numList);
}

add(10, 20, 30);

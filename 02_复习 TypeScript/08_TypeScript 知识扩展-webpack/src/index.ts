/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-03 14:15:03
 * @LastEditors: wc
 * @LastEditTime: 2022-11-04 14:27:57
 */
interface IPeople {
  name: string;
  age: number;
  height: string;
}

const people: IPeople = {
  name: "itchao",
  age: 23,
  height: "1.88"
};

console.log(people);

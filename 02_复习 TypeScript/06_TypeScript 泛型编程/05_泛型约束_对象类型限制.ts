/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-01 15:12:48
 * @LastEditors: wc
 * @LastEditTime: 2022-11-01 15:20:35
 */
interface IObj {
  name: string;
  age: number;
  height: string;
}

function getObjValue<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const name1 = getObjValue({ name: "itchao", age: 23, height: "1.88" }, "name");

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-01 14:25:32
 * @LastEditors: wc
 * @LastEditTime: 2022-11-01 14:31:22
 */

interface PType<T1, T2> {
  name: T1;
  age: T2;
  height: T1;
}

const p: PType<string, number> = {
  name: "itchao",
  age: 23,
  height: "1.88"
};

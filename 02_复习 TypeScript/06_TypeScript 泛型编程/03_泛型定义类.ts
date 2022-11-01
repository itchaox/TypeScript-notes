/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-01 14:31:44
 * @LastEditors: wc
 * @LastEditTime: 2022-11-01 14:34:55
 */

class People<T1, T2> {
  name: T1;
  age: T2;
  constructor(name: T1, age: T2) {
    this.name = name;
    this.age = age;
  }
}

const p6 = new People("itchao", 23);
const p7 = new People(11, 23);

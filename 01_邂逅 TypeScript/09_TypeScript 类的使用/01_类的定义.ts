/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-05 09:47:10
 * @LastEditors: wc
 * @LastEditTime: 2022-07-05 09:55:25
 */

// 直接在类中定义属性,需要初始化操作

class Person {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  name: string = "";
  age: number = 0;

  eating() {
    console.log(this.name + "eating");
  }
}

const p = new Person("itchao ", 23);
p.eating();
console.log("p.name", p.name);
console.log("p.age", p.age);

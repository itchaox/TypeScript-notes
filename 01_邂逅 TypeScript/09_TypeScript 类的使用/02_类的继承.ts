/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-05 10:03:20
 * @LastEditors: wc
 * @LastEditTime: 2022-07-05 11:02:40
 */

// Person 父类
// Student 子类
// Teacher 子类

class Person {
  name: string = "";
  age: number = 0;
  pId: string;

  constructor(pId: string) {
    this.pId = pId;
  }

  playing() {
    console.log("parent playing");
  }
}

class Student extends Person {
  stuId: string;

  constructor(stuId: string, pId: string) {
    super(pId);
    this.stuId = stuId;
  }

  studying() {
    console.log("studying");
  }

  playing() {
    super.playing(); // 执行父类 playing 函数
    console.log("children playing");
  }
}

class Teacher extends Person {
  teaId: string = "";

  constructor(pId: string) {
    super(pId);
  }
  teaching() {
    console.log("teaching");
  }
}

const s1 = new Student("1", "p1");
const t1 = new Teacher("1");

console.log(s1);
console.log(t1);

s1.studying();
s1.playing();
t1.teaching();

export {};

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-07-05 13:42:08
 * @LastEditors: wc
 * @LastEditTime: 2022-07-06 15:10:54
 */

// 静态成员: 通过类可以直接访问的属性和方法

class Student {
  static classTime: string = "20:00";
  myTime: string = "9:00";

  static playing() {
    console.log("静态成员的 playing");
  }
}

console.log(Student.classTime);
console.log(new Student().myTime);

Student.playing();

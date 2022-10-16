// 类型断言: 把宽泛的类型转换成具体的类型

const el = document.getElementById("myId") as HTMLImageElement

el.src = "url 地址"

class Person {}

class Student extends Person {
  studying() {}
}

function sayHello(p: Person) {
  // p.studying() // Person 不存在 studying 属性
  ;(p as Student).studying() // 断言 as
}

const stu = new Student()

sayHello(stu)

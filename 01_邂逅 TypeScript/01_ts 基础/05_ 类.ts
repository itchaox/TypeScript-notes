// 定义类
class Person {
  name!: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  running() {
    console.log(`${this.name}：running`)
  }

  eating() {
    console.log(`年龄：${this.age}`)
  }
}

const itchao = new Person('itchao', 22)
console.log(itchao)
itchao.running()
itchao.eating()


// 类的继承
class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log('studying')
  }

  running() {
    super.running()
    console.log('student running')
  }

  eating() {
    super.eating()
    console.log('student eating')
  }
}

const stu = new Student('itchao', 22, 1)
stu.studying()
stu.running()
stu.eating()


// 类的成员修饰符
// protected 修饰的是仅在同一类中可见
class A {
  protected name: string

  constructor(name: string) {
    this.name = name
  }

  running() {
    console.log(`${this.name} is running!`)
  }
}

class a extends A {
  constructor(name: string) {
    super(name)
  }

  running() {
    super.running()
  }

  eating() {
    console.log(`${this.name} is eating!`)
  }
}

const a1 = new a('chenchen')
console.log(a1)
a1.running()
a1.eating()


// private 修饰的是仅在类自身及子类中可见
class B {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  studying() {
    console.log(`${this.name} is studying`)
  }
}

const b = new B('b')
// (报错！) 属性“name”为私有属性，只能在类“B”中访问
// console.log(b.name) 


// 只读属性 readonly
class C {
  readonly name: string

  constructor(name: string) {
    this.name = name
  }

  running() {
    console.log(`${this.name} is running`)
  }
}

const c = new C('chaochao')
console.log(c.name)
// (报错！) 无法分配到 "name" ，因为它是只读属性
// C.name = 'ccc'


// getters/setters
class D {
  private _name: string

  set name(newName) {
    console.log('set')
    this._name = newName
  }

  get name() {
    console.log('get')
    return this._name
  }

  constructor(name: string) {
    this._name = name
  }
}

const d = new D('ddd')
console.log(d.name)
d.name = 'eee'
console.log(d.name)


// 静态成员
class E {
  static title: string = 'E_itchao'

  static running() {
    console.log('E_running');
  }
}

console.log(E.title);
E.running()


// 抽象类演练
abstract class Shape {
  abstract getArea(): number
}

class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

const circle = new Circle(10)
const rectangle = new Rectangle(10, 20)

function calc(shape: Shape) {
  console.log(shape.getArea());
}

calc(circle)
calc(rectangle)


// 类的类型
class Son {
  name: string
  constructor(name: string) {
    this.name = name
  }
  running() {
    console.log(`${this.name} is running!`);
  }
}

const s1: Son = new Son('itchao')
const s2: Son = {
  name: 'chenchen',
  running() {
    console.log(`${this.name} is running`);
  }
}

console.log(s1);
console.log(s2);

// type 声明对象类型
type Point1 = {
  x: number
  y: number
}

// interface 声明对象类型

interface Number {
  x: number
  y: number
}
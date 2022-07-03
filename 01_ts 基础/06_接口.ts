// type 声明对象类型
type Point = {
  x: number
  y: number
}

// interface 声明对象类型
interface Number {
  x: number
  y: number
}

// 接口中的可选属性
interface Num {
  name: string
  age?: number,
  friend?: {
    name: string
  }
}

const num1: Num = {
  name: 'itchao',
  age: 22,
  friend: {
    name: 'chao'
  }
}

console.log(num1.name);
console.log(num1.age);
console.log(num1.friend?.name);

// 接口的只读属性
interface onlyRead {
  readonly name: string
  age?: number
}

const r1: onlyRead = {
  name: 'itchao',
  age: 22
}

console.log(r1);
// (报错！)：name 为只读属性，不能修改
// r1.name = 'chenchen'

// 索引类型
interface frontNumber {
  [index: number]: string
}

const f1: frontNumber = {
  1: 'HTML',
  2: 'CSS',
  3: 'Javascript'
}

console.log(f1);


interface LanguageBirth {
  [name: string]: number
}

const language1: LanguageBirth = {
  'JavaScript': 1996,
  'Java': 1995,
  'C': 1972
}

console.log(language1);


// 接口的函数类型
interface CalcFunc {
  (num1: number, num2: number): number
}

const add: CalcFunc = (num1, num2) => {
  return num1 + num2
}

const sub: CalcFunc = (num1, num2) => {
  return num1 - num2
}

console.log(add(1, 9));
console.log(sub(11, 1));



// 接口的继承
interface Person {
  name: string
  eating: () => void
}

interface Animal {
  running: () => void
}

interface Student extends Person, Animal {
  sno: number
}

const stu: Student = {
  name: 'itchao',
  sno: 22,
  eating() {
    console.log(this.name + 'eating');
  },
  running() {
    console.log(this.name + 'running');
  }
}

console.log(stu);

// 接口的实现
interface ISwim {
  swimming: () => void
}

interface IRun {
  running: () => void
}

class People implements ISwim, IRun {
  swimming() {
    console.log('swimming');
  }

  running() {
    console.log('running');

  }
}

function swim(swimmer: ISwim) {
  swimmer.swimming()
}

const people = new People()
swim(people)
people.swimming()

// 交叉类型的应用
interface Name {
  name: string
}

interface IPlay {
  play: () => void
}

type NewType = Name & IPlay

const new1: NewType = {
  name: 'itchao',
  play() {
    console.log('playing');
  }
}

new1.play()
console.log(new1);

// interface 和 type 区别
interface IPerson {
  name: string
}

interface IPerson {
  age: number
}

type ISon = {
  name: string
}
// (报错！) 标识符“ISon”重复
// type ISon = {
//   age: number
// }

// 字面量赋值
interface IP {
  name: string
  running: () => void
}

// (报错！) 对象文字可以只指定已知属性，并且“age”不在类型“IP”中
// const p: IP = {
//   name: 'itchao',
//   age: 22,
//   running() {
//     console.log('running');
//   }
// }

interface IPA {
  name: string
  running: () => void
}

const obj = {
  name: 'chenchen',
  age: 22,
  running() {
    console.log('running');
  }
}

const ipa: IPA = obj
console.log(ipa);

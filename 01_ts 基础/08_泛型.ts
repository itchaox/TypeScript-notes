function foo<Type>(num1: Type): Type {
  return num1
}

const a = foo('abc')
console.log(a);

// 泛型接口
interface Foo<T> {
  value: T
  values: T[]
  handleValue: (value: T) => void
}

const f1: Foo<number> = {
  value: 1,
  values: [1, 2, 3, 4, 5],
  handleValue(value: number) {
    console.log(value);
  }
}

console.log(f1);

// 泛型类
class Point<T> {
  x: T
  y: T

  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

const p1 = new Point(1, 2)
const p2 = new Point<number>(1, 3)
const p3: Point<number> = new Point(10, 20)
console.log(p1);
console.log(p2);
console.log(p3);

// 泛型约束
interface Length {
  length: number
}

function getLength<T extends Length>(args: T) {
  return args.length
}

console.log(getLength('abc'));
console.log(getLength([1, 2, 3, 4, 5]));
console.log(getLength({ length: 20, name: 'itchao' }));

// 命名空间
export namespace Time {
  export function format(time: string) {
    return '20:00'
  }
}

export namespace Price {
  export function format(price: number) {
    return '222.22'
  }
}

// 声明变量-函数-类
declare let wname: string
declare let wage: number

declare function wfoo(): void

declare class wPerson {
  name: string
  age: number

  constructor(name: string, age: number)
}
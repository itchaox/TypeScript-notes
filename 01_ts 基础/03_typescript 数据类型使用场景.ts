// 函数参数类型限制
function num(num: number) {
  console.log(num)
}

num(1)
// 参数类型不匹配
// num('a')
// 参数个数不匹配
// num(1, 2)


// 函数返回值类型限制
function add(num1: number, num2: number): number {
  return num1 + num2
}

const a = add(2, 5)
console.log(a);


// 匿名函数的参数类型
const arr = ['1', 2, '3', 4, 5]
arr.forEach(item => console.log(typeof item))

// 函数参数为对象类型
function p(point: { x: number, y: number }) {
  console.log(`X坐标：${point.x}`);
  console.log(`Y坐标：${point.y}`);
}

p({ x: 1, y: 2 })

// 函数参数为对象类型时，可指定可选参数
function p1(point: { x: number, y: number, z?: number }) {
  console.log(`X坐标：${point.x}`)
  console.log(`Y坐标：${point.y}`)
  if (point.z) {
    console.log(`存在Z坐标，且Z坐标：${point.z}`)
  }
}
p1({ x: 1, y: 2 })
p1({ x: 1, y: 2, z: 3 })

// 使用联合类型
function getId(id: number | string) {
  if (typeof id === 'string') {
    console.log(`字符串类型，id：${id}`)
  } else {
    console.log(`数字类型，id：${id}`)
  }
}

getId(1)
getId('itchao')

// 可选类型补充
function strUndefined(msg?: string) {
  console.log(msg);
}

strUndefined()
strUndefined('itchao')
strUndefined(undefined)

// 类型别名
// 对象类型
type a1 = {
  x: number,
  y: number
}

function p2(point: a1) {
  console.log(point.x);
  console.log(point.y);
}

p2({ x: 100, y: 200 })
// 联合类型
type a2 = number | string

function p3(id: a2) {
  console.log(id);
}
p3(22)
p3('itchao')

// 类型断言 as
const title = ('itchao' as unknown) as number

// 非空类型断言!
function x(msg?: string) {
  console.log(msg!.length);
}

x('itchao')

// 可选链的使用
type person = {
  name: string,
  friend?: {
    name: string,
    age?: number,
    girlfriend?: {
      name: string
    }
  }
}

const info: person = {
  name: 'itchao',
  friend: {
    name: 'chao',
    girlfriend: {
      name: 'chenchen'
    }
  }
}

console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlfriend?.name);

// ?? 和 !! 作用
// !!
const boolean = 'itchao'
const flag1 = Boolean(boolean)
const flag2 = !!boolean
console.log(flag1, flag2);

// ??
const isTrue = 'itchao'
const isFalse = isTrue ?? 'xxx'
console.log(isFalse);

// 字面量类型
let msg: 'itchao' = 'itchao'
// msg = 'a' 不符合 'itchao' 的类型限制
msg = 'itchao'

type way = 'left' | 'right' | 'center'
function road(way: way) {
  console.log(`方向：${way}`);
}
road('right')

// 字面量推理
const infos = {
  url: 'http://www.baidu.com',
  method: 'GET'
}

function request(url: string, method: 'GET' | 'POST') {
  console.log(url, method);
}

// 如下会报错，因为无法将 string 类型变量，赋值给字面量类型变量
// request(infos.url, infos.method)

// 方式一：
request(infos.url, infos.method as 'GET')

// 方式二
// const infos = {
//   url: 'http://www.baidu.com',
//   method: 'GET'
// } as const
// request(infos.url, infos.method)
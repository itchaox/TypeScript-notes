// typeof
type id = number | string
function getId(myId: id) {
  if (typeof myId === 'string') {
    console.log(myId, ',数据类型为 string');
  } else {
    console.log(myId, ',数据类型为 number');
  }
}

getId(2)

// 平等缩小
type way = 'left' | 'right' | 'center'
function changeWay(direction: way) {
  switch (direction) {
    case 'left':
      console.log('left');
      break;
    case 'right':
      console.log('right');
      break;
    case 'center':
      console.log('center');
      break;
    default:
      console.log('默认方向');
  }
}

changeWay('right')

// instanceof
function changeData(data: Date | string) {
  if (data instanceof Date) {
    console.log(data.toLocaleString());
  } else {
    console.log(data);
  }
}
let time = new Date()
changeData(time)

// in
type fish = { swim: () => void }
type dog = { run: () => void }

function animal(animal: fish | dog) {
  if ('swim' in animal) {
    animal.swim()
  } else {
    animal.run()
  }
}

// TypeScript 函数类型
type param = (num1: number, num2: number) => void
function calc(fn: param) {
  console.log(fn(20, 30));
}

function sum(num1: number, num2: number) {
  return num1 + num2
}

function mul(num1: number, num2: number) {
  return num1 * num2
}

calc(sum)
calc(mul)

// 函数参数的可选类型
function add(num1: number, num2?: number) {
  console.log(num1);
  console.log(num2);

}

add(1)
add(1, 2)

// 默认参数
function del(num1: number, num2: number = 10) {
  console.log(num1 - num2);
}

del(10)
del(15)
del(50, 30)

// 剩余参数
function res(...nums: number[]) {
  let total = 0
  for (const num of nums) {
    total += num
  }
  return total
}

const res1 = res(10, 20, 30, 40, 50)
console.log(res1);

// 可推导的 this 类型
const info = {
  name: 'itchao',
  say() {
    console.log(this.name);
  }
}
info.say()

// 不确定的 this 类型
type NameType = {
  name: string
}
function tell(this: NameType) {
  console.log(this.name);
}

const infos = {
  name: 'chenchen',
  tell
}

infos.tell()

// sum 函数的重载
function sumAny(num1: number, num2: number): number
function sumAny(num1: string, num2: string): string
function sumAny(num1: any, num2: any): any {
  return num1 + num2
}

console.log(sumAny(20, 30));
console.log(sumAny('100_', 'itchao'));

// 实现获取长度的函数
// 1. 联合类型
function getLength(any: string | any[]): number {
  return any.length
}

// 2.函数重载
function getLengthAny(any: string): number
function getLengthAny(any: any[]): number
function getLengthAny(any: any): number {
  return any.length
}
console.log('字符串长度：' + getLength('itchaolovechenchen'));
console.log('字符串长度：' + getLengthAny('itchao'));



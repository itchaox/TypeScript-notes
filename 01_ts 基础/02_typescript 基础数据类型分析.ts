// unknown 不确定变量类型
function foo(): string {
  return 'itchao'
}

function bar(): number {
  return 123
}

let flag: boolean = true
flag = false
let res: unknown
if (flag) {
  res = foo()
} else {
  res = bar()
}

if (typeof res === 'string') {
  console.log(`res 长度：${res.length}`);
} else {
  console.log('res 为数值类型');
}

// void 函数没有返回值时，则返回值为 void 类型
function number(num1: number, num2: number): void {
  console.log(num1, num2);
}

number(1, 2)

// never 表示永远不会发生值的类型
function err(): never {
  throw new Error()
}

// tuple 可存放不同类型的特殊数组
const arr: [number, string, number] = [22, 'itchao', 1.85]
const age = arr[0]
const title = arr[1]
const height = arr[2]
console.log(age, title, height);

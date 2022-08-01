# TypeScript 进阶之路

### 1. 基本概念

* TypeScript 是拥有类型的 JavaScript 超集( 加强版 )，它可以编译成普通、干净、完整的 JavaScript 代码
* JavaScript 的特性，TypeScript 全都支持，并且它紧随 ECMAScript 标准，所以ES6、ES7等新语法标准，它都支持
* 并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型（Enum）、元组类型（Tuple）等
* TypeScript 拥有类型限制，安全性更高

### 2. 基本数据类型

* number 类型：数字类型，不区分整数类型（int）和浮点数类型（double），支持 ES6 新增的二进制、八进制等

  * `const a:number = 1`

* boolean 类型：布尔类型，取值：true、false

  * `const a:boolean = true`

* string 类型：字符串类型，支持单引号或者双引号表示，同时也支持 ES6 新增的模板字符串语法

  * `const a:string = 'itchao'`

* Array 类型：数组类型

  * `const a: string[] = ['a', 'b', 'c']`
  * `const a: Array<string> = ['a', 'b', 'c']`

* object 类型：对象类型，用于描述对象，但不能获取数据和设置数据

  * ```typescript
    const a: object = {
      name: 'itchao',
      age: 22,
      height: 1.85
    }
    ```

* symbol 类型：可定义相同属性名，因为 Symbol 函数返回的是不同值

  * ```typescript
    const a: symbol = Symbol('title')
    const b: symbol = Symbol('title')
    
    const person = {
      [a]: 'itchao',
      [b]: '未来的程序大佬'
    }
    ```

* null 类型：类型的值也为 null

  * `const a: null = null`

* undefined 类型：类型的值也为 undefined

  * `const a: undefined = undefined`

* any 类型：无法确定变量类型，且变量类型可能会发生变化（类似无类型限制的 JavaScript）

  * 对 any 类型变量进行任何操作，包括获取不存在属性、方法等

  * 给 any 类型变量赋值为任何值，比如数字、字符串类型的值等

  * ```typescript
    let a: any = 'itchao'
    a = 22
    a = true
    
    let b: any[ ] = ['itchao', 22, true]
    ```

* unknown 类型：描述类型不确定的变量

  * ```typescript
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
    ```

* void 类型：指定一个函数没有返回值，则返回值为 void 类型

  * 可以将 null 和 undefined 赋值给 void 类型，也就是函数可以返回 null 或 undefined

  * 函数未写任何类型时，则默认返回值类型为 void 类型，也可显示指定返回值是 void 类型

  * ```typescript
    function number(num1: number, num2: number): void	 {
    	console.log(num1, num2)
    }
    ```

* never 类型：表示永远不会发生值的类型

  * ```typescript
    function err(): never {
      throw new Error()
    }
    ```

* tuple 类型：可存放不同数据类型的特殊数组

  * 元组中每个元素都有自己的特性类型，根据索引值获取到的值，可以确定对应数据类型

  * ```typescript
    const arr: [number, string, number] = [22, 'itchao', 1.85]
    const age = arr[0]
    const title = arr[1]
    const height = arr[2]
    console.log(age, title, height);
    ```

### 3. 数据类型使用场景

* 函数参数类型：声明函数时，限制函数参数类型

  * ```typescript
    function num(num1: number) {
      console.log(num1);
    }
    
    num(1)
    // 参数类型不匹配
    // num('a')
    // 参数个数不匹配
    // num(1, 2)
    ```

* 函数返回值类型：通常情况不需要返回值类型注解，因为 TypeScript 会根据 return 返回值推断函数返回值的类型

  * 添加返回值注释时，注释出现在函数列表后面

  * ```typescript
    function add(num1: number, num2: number): number {
      return num1 + num2
    }
    
    const a = add(2, 5)
    console.log(a);
    ```

* 匿名函数参数类型：自动指定参数类型，函数执行时上下文可以帮助确定参数和返回值类型

  * ```typescript
    const arr = ['1', 2, '3', 4, 5]
    arr.forEach(item => console.log(typeof item))
    ```

* 函数参数为对象类型：限定一个函数接收的参数为对象类型

  * 在对象中添加属性时，限定属性的数据类型

  * 属性之间使用 , 或 ; 分隔，最后一个分隔符可选

  * 每个属性的类型部分也是可选的，如果不指定，那么该属性的数据类型就是 any 类型

  * ```typescript
    function p(point: { x: number, y: number }) {
      console.log(`X坐标：${point.x}`);
      console.log(`Y坐标：${point.y}`);
    }
    
    p({ x: 1, y: 2 })
    ```

* 函数参数为对象类型时，可指定属性为可选属性：具体操作是在属性后面加 ?:

  * ```typescript
    function p1(point: { x: number, y: number, z?: number }) {
      console.log(`X坐标：${point.x}`)
      console.log(`Y坐标：${point.y}`)
      if (point.z) {
        console.log(`存在Z坐标，且Z坐标：${point.z}`)
      }
    }
    p1({ x: 1, y: 2 })
    p1({ x: 1, y: 2, z: 3 })
    ```

* 联合类型：相当于或运算符，让数据类型以 | 连接，构成新的数据类型集合

  * 由两个或多个其他类型组成的新类型

  * 表示可以是这些类型中的任何一个值

  * 联合类型中的每个类型都被称为联合成员

  * ```typescript
    function getId(id: number | string) {
      console.log(`您的id：${id}`)
    }
    
    getId(1)
    getId('itchao')
    ```

* 使用联合类型：因为联合类型的数据类型不确定，所以不能直接使用联合类型的数据，需要先判断并缩小联合范围，再使用联合内数据

  * ```typescript
    function getId(id: number | string) {
      if (typeof id === 'string') {
        console.log(`字符串类型，id：${id}`)
      } else {
        console.log(`数字类型，id：${id}`)
      }
    }
    
    getId(1)
    getId('itchao')
    ```

* 可选类型补充：可选类型可以看作是 类型和 undefined 的联合类型

  * ```typescript
    function strUndefined(msg?: string) {
      console.log(msg);
    }
    
    strUndefined()
    strUndefined('itchao')
    strUndefined(undefined)
    ```

* 类型别名：使用 type 声明类型别名，便于在函数参数为对象类型和联合类型时多次使用

  * ```typescript
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
    ```

* 类型断言 as：TypeScript 无法获取具体类型信息时，需要使用类型断言 as

  * TypeScript 只允许类型断言转换为**更具体**或者**不太具体**的类型版本，此规则可防止不可能的强制转化

  * ```typescript
    const title = ('itchao' as unknown) as number
    ```

* 非空类型断言！：确定传入参数有值时，可以使用非空类型断言！，表示当确定某个标识符有值时，跳过 ts 在编译阶段对它的检测

  * ```typescript
    function x(msg?: string) {
      console.log(msg!.length);
    }
    
    x('itchao')
    ```

* 可选链的使用：可选链不是 TypeScript 特有属性，它是 ES11（ES2020）新增特性

  * 可选链使用可选链操作符 ?.

  * 作用：当对象属性不存在时，会短路，直接返回 undefined，如果存在，才会继续执行

  * ```typescript
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
    ```

* ?? 和 !! 的作用：

  * !! 操作符：将其他类型转换成 boolean 类型，类似于 Boolean(变量) 方法

  * ?? 操作符：ES11 新特性，空集合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数，否则返回其左侧操作数

  * ```typescript
    // !!
    const boolean = 'itchao'
    const flag1 = Boolean(boolean)
    const flag2 = !!boolean
    console.log(flag1, flag2);
    
    // ??
    const isTrue = 'itchao'
    const isFalse = isTrue ?? 'xxx'
    console.log(isFalse);
    ```

* 字面量类型：使用字面量类型创建新的类型限制

  * ```typescript
    let msg: 'itchao' = 'itchao'
    // msg = 'a' 不符合 'itchao' 的类型限制
    msg = 'itchao'
    
    type way = 'left' | 'right' | 'center'
    function road(way: way) {
      console.log(`方向：${way}`);
    }
    road('right')
    ```

* 字面量推理：对象在进行字面量推理时，无法将 string 赋值给一个字面量类型

  * ```typescript
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
    ```


### 4. 数据类型相关概念

* 类型缩小：

  * 类型缩小的英文是 Type Narrowing
  * 通过类似 typeof padding === "number" 的判断语句，改变 TypeScript 的执行路径
  * 在给定执行路径中，可以缩小比声明时更小的类型，这个过程称为 缩小
  * 编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

* 常见类型保护有如下几种：

  * typeof
  * 平等缩小（比如===、!==） 
  * instanceof
  * in
  * 等等

* typeof：在 TypeScript 中利用 typeof 检测也是一种类型保护，因为 TypeScript 是根据 typeof 返回的不同值进行编码

  * ```typescript
    type id = number | string
    function getId(myId: id) {
      if (typeof myId === 'string') {
        console.log(myId, ',数据类型为 string');
      } else {
        console.log(myId, ',数据类型为 number');
      }
    }
    
    getId(2)
    ```

* 平等缩小：使用 Switch 或相等的一些运算符来表达相等性（比如 ===、!== 等）

  * ```typescript
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
    ```

* instanceof 操作符：检查一个值是否是另一个值的 “ 实例 ”

  * ```typescript
    function changeData(data: Date | string) {
      if (data instanceof Date) {
        console.log(data.toLocaleString());
      } else {
        console.log(data);
      }
    }
    let time = new Date()
    changeData(time)
    ```

* in 操作符：用于确定对象中是否有指定属性名，如果指定属性名在指定对象或其原型链中，则 in 运算符 返回 true

  * ```typescript
    type fish = { swim: () => void }
    type dog = { run: () => void }
    
    function animal(animal: fish | dog) {
      if ('swim' in animal) {
        animal.swim()
      } else {
        animal.run()
      }
    }
    ```

* TypeScript 函数类型：编写函数类型的表达式，表示函数类型

  * (num1: number, num2: number) => void，表示一个函数类型

  * 该函数接收两个参数：num1 和 num2，并且都是 number 类型

  * 而且这个函数没有返回值，所以是 void

  * TypeScript 不可省略 num1 和 num2

  * ```typescript
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
    ```

* 参数的可选类型：使用 ?: 指定某个是可选的

  * 如：`num?: number`，则 num 类型为 number | undefined

  * 可选参数必须在必选参数的后面

  * ```typescript
    function add(num1: number, num2?: number) {
      console.log(num1);
      console.log(num2);
    }
    
    add(1)
    add(1, 2)
    ```

* 默认参数：从 ES6 开始，JavaScript 支持默认参数，TypeScript 也支持默认参数

  * 如：`num: number = 22`，该 num 类型实则为 number 和 undefined 的联合类型

  * ```typescript
    function del(num1: number, num2: number = 10) {
      console.log(num1 - num2);
    }
    
    del(10)
    del(15)
    del(50, 30)
    ```

* 剩余参数：从 ES6 开始，JavaScript 也支持剩余参数，剩余参数允许将一个不定数量的参数放到一个数组中

  * ```typescript
    function res(...nums: number[]) {
      let total = 0
      for (const num of nums) {
        total += num
      }
      return total
    }
    
    const res1 = res(10, 20, 30, 40, 50)
    console.log(res1);
    ```

* 可推导的 this 类型：this 在不同情况下会绑定不同的值，所以它的类型就更难确定

  * ```typescript
    const info = {
      name: 'itchao',
      say() {
        console.log(this.name);
      }
    }
    info.say()
    ```

  * 上面的代码可以正常运行，也就是 TypeScript 编译时，认为 this 可以正常使用

  * TypeScript 认为 say( ) 函数 有一个对应的 this 外部对象 info，在使用时将 this 指向该对象

* 不确定的 this 类型：某些情况，并不知道 this 指向什么

  * ```typescript
    function tell() {
      console.log(this.name);
    }
    
    const infos = {
      name: 'chenchen',
      tell
    }
    
    infos.tell()
    ```

  * 上面代码运行时会报错

  * TypeScript 进行类型检测的目的让代码更加安全

  * 这个对于 tell( ) 函数的调用，虽然是通过 infos 对象调用，this 依旧指向 infos 对象

  * 但对于 TypeScript 编译器来讲，上面的代码是不安全的，因为可能直接调用函数，也可能通过其他对象调用函数

* 指定 this 类型：通常 TypeScript 要求明确指定 this 类型

  * ```typescript
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
    ```

* 函数的重载：在 TypeScript 中，可以编写不同的重载签名来表示函数以不同的方式进行调用

  * 一般编写两个或者以上的重载签名，再去编写一个通用函数以及实现

  * sum 函数进行重载：

  * 调用 sum( ) 函数时，根据传入参数类型决定执行函数体时，到底执行哪一个函数的重载签名

  * ```typescript
    function sumAny(num1: number, num2: number): number
    function sumAny(num1: string, num2: string): string
    function sumAny(num1: any, num2: any): any {
      return num1 + num2
    }
    
    console.log(sumAny(20, 30));
    console.log(sumAny('100_', 'itchao'));
    ```

* 联合类型和重载：

  * 当前需求：定义一个函数，可以传入字符串或者数组，获取它们的长度

  * 方案一：联合类型

  * 方案二：函数重载

  * ```typescript
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
    ```

  * 开发中尽量使用联合类型来实现

### 5. 类

#### 5.1 认识类的使用

* 早期的 JavaScript 开发中(ES5) 需要通过函数和原型链实现类和继承，从 ES6 开始，引入了 class 关键字，更加方便定义和使用类
* TypeScript 作为 JavaScript 的超集，也支持使用 class 关键字，并且还可以对类的属性和方法等进行静态类型检测
* 类的定义通常使用 class 关键字
  * 在面向对象的世界中，任何事物都可以使用类的结构来描述
  * 类中包含特有的属性和方法

#### 5.2 类的定义

* **定义一个 Person 类：**

* 使用 class 关键字定义一个类

* 可以声明一些类的属性：在类的内部声明类的属性以及对应的类型

*  如果类型没有声明，那么它们默认是 any 类型

* 也可以给属性设置初始化值

* 在默认的 strictPropertyInitialization 模式下属性必须初始化，如果没有初始化，那么编译时会报错

  *  如果在 strictPropertyInitialization 模式下不希望给属性初始化，可以使用 name!: string语法

* 类可以有自己的构造函数 constructor ，当通过 new 关键字创建一个实例时，构造函数会被调用

* 构造函数不需要返回任何值，默认返回当前创建出来的实例

* 类中可以有自己的函数，定义的函数称之为方法

* ```typescript
  class Person {
    name!: string
    age: number
  
    constructor(name: string, age: number) {
      this.age = age
    }
  
    running() {
      console.log(`${this.name}：running`);
    }
  
    eating() {
      console.log(`年龄：${this.age}`);
    }
  }
  
  const itchao = new Person('itchao', 22)
  console.log(itchao);
  itchao.running()
  itchao.eating()
  ```

#### 5.3 类的继承

* 面向对象的其中一大特性就是继承，继承不仅仅可以减少代码量，也是多态的使用前提

* 使用 extends 关键字实现继承，子类中使用 super 来访问父类

* 来看一下 Student 类继承自 Person 类：

  * Student 类可以有自己的属性和方法，并且会继承 Person 类的属性和方法
  * 在构造函数中，可以通过 super 来调用父类的构造方法，对父类中的属性进行初始化

* ```typescript
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
  ```

#### 5.4 类的成员修饰符

* 在 TypeScript 中，类的属性和方法支持三种修饰符： public、private、protected

  * public 修饰的是在任何地方可见，公有的属性或方法，默认编写的属性就是 public
  * private 修饰的是仅在同一类中可见，私有的属性或方法
  * protected 修饰的是仅在类自身及子类中可见，受保护的属性或方法

* public 是默认修饰符，也是可以直接访问的，这里演示一下 protected 和 private

* ```typescript
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
  ```

#### 5.5 只读属性 readonly

* 如果有一个属性不希望外界可以任意修改，只希望确定值后直接使用，可以使用 readonly 修饰符：

* ```typescript
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
  ```

#### 5.6  getters 和 setters

* 一些私有属性不能直接访问时，或者某些属性想要监听它的获取( getter ) 和设置( setter )的过程，这个时候可以使用存取器

* ```typescript
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
  ```

#### 5.7 静态成员

* 在 TypeScript 中通过关键字 static 定义类级别的成员和方法

* ```typescript
  class E {
    static title: string = 'E_itchao'
    
    static running() {
      console.log('E_running');
    }
  }
  
  console.log(E.title);
  E.running()
  ```

#### 5.8 抽象类 abstract

* 继承是多态使用的前提
  * 在定义很多通用的调用接口时, 通常会让调用者传入父类，通过多态来实现更加灵活的调用方式
  * 但是，父类本身可能并不需要对某些方法进行具体的实现，所以父类中定义的方法,，可以定义为抽象方法
  
* 抽象方法：在 TypeScript 中没有具体实现的方法(没有方法体)
  * 抽象方法，必须存在于抽象类中
  * 抽象类是使用 abstract 声明的类
  
* 抽象类的特点：
  * 抽象类是不能被实例的类（就是不能通过 new 创建）
  * 抽象方法必须被子类实现，否则该类必须是一个抽象类
  
* ```typescript
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
  ```

#### 5.9 类的类型

* 类本身也可以作为一种数据类型

* ```typescript
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
  ```

### 6. 接口

#### 6.1 接口的声明

* 通过 type 声明对象类型：

  * ```typescript
    type Point = {
      x: number
      y: number
    }
    ```

* 通过 interface 接口 声明对象类型：

  * ```typescript
    interface Number {
      x: number
      y: number
    }
    ```

#### 6.2 接口的可选属性

* 接口中也可以定义可选属性（ ?: 修饰符 ）

* ```typescript
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
  ```

#### 6.3 接口的只读属性

* 接口也可以定义只读属性 ( readonly 修饰符 )：初始化之后，值不能被修改

* ```typescript
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
  ```

#### 6.4 接口的索引类型

* 使用 interface 定义对象类型时，其中的属性名、类型、方法都是确定的，但是有时会遇到类似下面的对象

* ```typescript
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
  ```

#### 6.5 接口的函数类型

* 可以通过 interface 定义对象中普通的属性和方法，也可以定义函数类型：

* ```typescript
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
  ```

* 推荐使用类型别名定义函数：

* ```typescript
  type CalcFunc = (num1: number, num2: number) => number
  ```

#### 6.6 接口的继承

* 接口和类一样，使用 extends 关键字进行继承：接口是支持多继承（类不支持多继承）

* ```typescript
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
  ```

#### 6.7 接口的实现

* 接口定义后，可以被类实现：如果被一个类实现，则之后需要传入接口时，都可以将该类传入，这就是面向接口开发

* ```typescript
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
  ```

#### 6.8 交叉类型

* 交叉类型：

  * 交叉类型表示需要同时满足多个类型的条件
  * 交叉类型使用 & 符号

* 交叉类型例子：

  * ```typescript
    type MyType = number & string
    ```

  * 表达的含义是 number 和 string 类型需要同时满足

  * 但是没有同时满足 number 和 string 类型的值，所以 MyType 是 never 类型

#### 6.9 交叉类型的应用

* 在开发中，进行交叉时，通常是让对象类型进行交叉：

* ```typescript
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
  ```

#### 6.10 interface 和 type 区别

* interface 和 type 都可以定义对象类型，那么在开发中定义对象类型时如何选择？

  * 如果是定义非对象类型，通常推荐使用 type，比如 Direction、Alignment、一些 Function

* 如果是定义对象类型，那么它们是有区别的：

  * interface 可以重复对某个接口定义属性和方法
  * 而 type 定义的是别名，别名是不能重复

* ```typescript
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
  ```

#### 6.11 字面量赋值

* 分析代码如下：

* ````typescript
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
  ````

* 因为 TypeScript 在字面量直接赋值的过程中，为了进行类型推导会进行严格的类型限制

  * 但是之后如果是将一个 变量标识符 赋值给其他的变量时，会进行 freshness 擦除操作

### 7. 枚举类型

#### 7.1 TypeScript 枚举类型

* 枚举类型是为数不多的 TypeScript 特性新增特性之一：

  * 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型
  * 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型

* ```typescript
  enum D {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
  }
  
  function changeWay(d: D) {
    switch (d) {
      case D.LEFT:
        console.log('左转');
        break
      case D.RIGHT:
        console.log('右转');
        break
      case D.TOP:
        console.log('向上');
        break
      case D.BOTTOM:
        console.log('向下');
        break
      default:
        console.log('默认值');
    }
  }
  
  changeWay(D['LEFT'])
  ```

#### 7.2 枚举类型的值

* 枚举类型默认是有值的，比如上面的枚举，默认值是这样：

* ```typescript
  enum D {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3
  }
  ```

* 也可以给枚举其他值：( 从 100 进行递增 )

* ```typescript
  enum D {
    LEFT = 100,
    RIGHT,
    TOP,
    BOTTOM
  }
  ```

* 也可以给他们赋值其他的类型：

* ```typescript
  enum D {
    LEFT,
    RIGHT,
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
  }
  ```

### 8. 泛型

#### 8.1 泛型基础

* 类型的参数化：封装一个函数，传入一个参数，并且返回该参数（需要考虑，传入参数和返回值的类型是否一致）

* 类型变量：作用于类型，而不是值

* ```typescript
  function foo<Type>(num1: Type): Type {
    return num1
  }
  
  const a = foo('abc')
  console.log(a);
  ```

* 调用方式：

  * 方式一：通过 <类型> 的方式将类型传递给函数

    * ```typescript
      foo<string>('abc')
      foo<number>(123)
      ```

  * 方式二：通过类型推导，自动推导传入变量类型（会推导出是字面量类型，因为字面量类型对于函数也适用）

    * ```typescript
      foo('abc')
      foo(123)
      ```

* 传入多个类型：

  * ```typescript
    function foo<T, E>(a:T, b:E){
    
    }
    ```

* 开发中常用名称：

  * T：Type 缩写，类型
  * K、V：key 和 value 缩写，键值对
  * E：Element 缩写，元素
  * O：Object 缩写，对象

#### 8.2 泛型接口

* 定义接口时可以使用泛型：

* ```typescript
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
  ```

#### 8.3 泛型类

* ```typescript
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
  ```

#### 8.4 泛型约束

* 希望传入类型有某些共性，但这些共性可能不是在同一类型中

  * 比如 string 和 array 都有 length 属性，或者某些对象也存在 length 属性
  * 可设置为：只要拥有 length 属性就可以作为参数类型

* ```typescript
  interface Length {
    length: number
  }
  
  function getLength<T extends Length>(args: T) {
    return args.length
  }
  
  console.log(getLength('abc'));
  console.log(getLength([1, 2, 3, 4, 5]));
  console.log(getLength({ length: 20, name: 'itchao' }));
  ```

### 9. 模块化开发

* TypeScript 支持两种方式控制作用域：

  * 模块化：每个文件可以是一个独立模块，支持 ES Module，也支持 CommonJS

    * ```typescript
      export function add(num1: number, num2: number) {
        return num1 + num2
      }
      ```

  * 命名空间：通过 namespace 来声明一个命名空间

    * 命名空间在 TypeScript 早期时，称之为内部模块，主要目的是将一个模块内部再进行作用域划分，防止命名冲突问题

    * ```typescript
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
      ```

### 10. 类型的查找

* .ts：最终输出为 .js 文件，通常编写代码的地方
* .d.ts：用来做类型的声明，仅仅用来做类型检测，告知 TypeScript 有哪些类型
* TypeScript 查找类型声明的位置：
  * 内置类型声明：
    * 内置类型声明是 TypeScript 自带、内置了 JavaScript 运行时的一些标准化 API 的声明文件
    * 包括比如 Math、Date 等内置类型，也包括 DOM API，比如 Window、Document 等
    * 内置类型声明通常在安装 TypeScript 环境时带有
  * 外部定义类型声明：
    * 外部类型声明通常是使用一些库（比如第三方库）时，需要的一些类型声明
    * 这些库通常有两种类型声明方式：
      * 方式一：在自己库中进行类型声明（编写.d.ts文件），比如 axios
      * 方式二：通过社区的一个公有库 DefinitelyTyped 存放类型声明文件
        * 该库的 GitHub 地址：https://github.com/DefinitelyTyped/DefinitelyTyped/
        * 该库查找声明安装方式的地址：https://www.typescriptlang.org/dt/search?search=
        * 比如安装 react 的类型声明： npm i @types/react --save-dev
  * 自己定义类型声明：
    * 什么情况下需要自己定义声明文件呢？
    * 情况一：使用的第三方库是一个纯 JavaScript 库，没有对应的声明文件；比如 lodash
    * 情况二：给自己代码中声明一些类型，方便在其他地方直接进行使用


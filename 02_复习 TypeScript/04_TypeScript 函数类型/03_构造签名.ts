/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-24 17:06:30
 * @LastEditors: wc
 * @LastEditTime: 2022-10-27 16:27:32
 */

class Person {}

interface IType {
  new (): Person;
}

function f(fn: IType) {
  const a = new fn();
}

interface IPerson {
  name: string;
  age: number;
}

const a = {
  name: "itchao",
  age: 23,
  height: 20
};

const info: IPerson = a;

// interface IPType {
//   [index: number]: string;
// }

// const i: IPType = ["1", "2", "3"];
// i.forEach(() => {});

export {};

/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-10-24 17:06:30
 * @LastEditors: wc
 * @LastEditTime: 2022-10-24 17:10:35
 */

class Person {}

interface IType {
  new (): Person;
}

function f(fn: IType) {
  const a = new fn();
}

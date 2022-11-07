/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-07 10:30:18
 * @LastEditors: wc
 * @LastEditTime: 2022-11-07 11:44:48
 */
import wcRequest from "../index";
console.log(2222);
wcRequest
  .request({
    url: "/entire/list",
    params: {
      offset: 0,
      size: 20
    }
  })
  .then(res => {
    console.log(res.data);
  });

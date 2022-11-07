/*
 * @Desc: 使用 axios 实例
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-07 10:01:42
 * @LastEditors: wc
 * @LastEditTime: 2022-11-07 10:37:24
 */
import WCRequest from "./request";

import { BASE_URL, TIME_OUT } from "./config";

const wcRequest = new WCRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export default wcRequest;

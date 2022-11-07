/*
 * @Desc: 封装 axios
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-07 10:04:34
 * @LastEditors: wc
 * @LastEditTime: 2022-11-07 11:24:26
 */
import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

class WCRequest {
  instance: AxiosInstance;

  // request 实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  // 封装网络请求
  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default WCRequest;

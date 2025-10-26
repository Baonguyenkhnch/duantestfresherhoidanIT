import 'axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
   export interface AxiosResponse<T=any> extends Promise<T>{}
  }
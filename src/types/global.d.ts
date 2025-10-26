// global.d.ts
export {}

declare global {
  /**
   * ✅ Kiểu trả về từ backend
   */
  interface IBackendRes<T> {
    error?: string | string[]
    message: string
    statusCode: number | string
    data?: T
  }

  /**
   * ✅ Kiểu phân trang chung
   */
  interface IModelPaginate<T> {
    meta: {
      current: number
      pageSize: number
      pages: number
      total: number
    }
    results: T[]
  }
}

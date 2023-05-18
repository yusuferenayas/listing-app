import axios, { AxiosInstance } from 'axios'

import { apiRoutes } from 'src/constants/routes'
import { LIMIT_PER_PAGE } from 'src/constants/config'

import { IProductList, IProduct } from './interface'

class ApiClient {
  axiosApi: AxiosInstance

  constructor() {
    const axiosApi = axios.create({
      headers: {
        'Content-Type': 'application/json',
        accept: '*/*',
      },
      timeout: 20000,
    })

    axiosApi.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(error.response.data)
        return error
      }
    )

    this.axiosApi = axiosApi
  }

  fetchProducts = async (skip: number): Promise<IProductList> => {
    const response = await this.axiosApi.get<IProductList>(
      apiRoutes.fetchProducts,
      { params: { limit: LIMIT_PER_PAGE, skip } }
    )

    return response?.data
  }

  fetchProductDetail = async (productId: number): Promise<IProduct | null> => {
    const response = await this.axiosApi.get<IProduct>(
      apiRoutes.fetchProductDetail(productId)
    )

    return response?.data
  }
}

export { ApiClient }

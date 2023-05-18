import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import CircularProgress from '@mui/material/CircularProgress'

import { IProduct, useApiClient } from 'src/api'
import Layout from 'src/components/Layout'
import { H1, P } from 'src/components/Typography'

import * as S from './styled'

export type Props = {
  id: number
}

const ProductDetailPage: NextPage<Props> = ({ id }) => {
  const apiClient = useApiClient()
  const [loading, setLoading] = useState(false)
  const [productDetail, setProductDetail] = useState<
    IProduct | undefined | null
  >()

  useEffect(() => {
    const getProductsList = async () => {
      setLoading(true)
      const response = await apiClient.fetchProductDetail(id)
      setProductDetail(response)
      setLoading(false)
    }

    getProductsList()
  }, [apiClient, id])

  return (
    <Layout>
      <S.ProductionDetailWrapper>
        {loading && (
          <S.LoadingWrapper>
            <CircularProgress color='success' />
          </S.LoadingWrapper>
        )}
        <H1>Product Detail</H1>
        {productDetail ? (
          <>
            <P>
              Name: <b>{productDetail?.title}</b>
            </P>
            <P>
              Category: <b>{productDetail?.category}</b>
            </P>
            <P>
              Price: <b>{productDetail?.price}</b>
            </P>
            <P>
              Rating: <b>{productDetail?.rating}/5</b>
            </P>
          </>
        ) : (
          <P>No Data</P>
        )}
      </S.ProductionDetailWrapper>
    </Layout>
  )
}

export default ProductDetailPage

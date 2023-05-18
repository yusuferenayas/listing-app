import { MouseEventHandler, useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from '@mui/material/Pagination'

import Layout from 'src/components/Layout'
import { IProductList, useApiClient } from 'src/api'
import Container from 'src/components/Container'
import { usePagination } from 'src/hooks/usePagination'
import { routes } from 'src/constants/routes'

import * as S from './styled'

const HomePage: NextPage = () => {
  const router = useRouter()
  const apiClient = useApiClient()
  const [productsList, setProductsList] = useState<IProductList | undefined>()
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const { skipCount } = usePagination(page)

  const maxPage = productsList
    ? Math.ceil(productsList?.total / productsList.limit)
    : 1

  useEffect(() => {
    const getProductsList = async () => {
      setLoading(true)
      const response = await apiClient.fetchProducts(skipCount)
      setProductsList(response)
      setLoading(false)
    }

    getProductsList()
  }, [apiClient, skipCount])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const handleRowClick = (id: number) => (e: any) => {
    router.push(routes.productDetail(id))
  }

  return (
    <Layout>
      <Container>
        {loading && (
          <S.LoadingWrapper>
            <CircularProgress color='success' />
          </S.LoadingWrapper>
        )}
        {productsList && productsList.products.length > 0 && (
          <S.TableWrapper>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Rating</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsList.products.map((row) => (
                    <TableRow key={row.id} onClick={handleRowClick(row.id)}>
                      <TableCell component='th'>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.price} $</TableCell>
                      <TableCell>{row.rating}/5</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </S.TableWrapper>
        )}
        <S.PaginationWrapper>
          <Pagination count={maxPage} page={page} onChange={handleChange} />
        </S.PaginationWrapper>
      </Container>
    </Layout>
  )
}

export default HomePage

import React from 'react'
import { LIMIT_PER_PAGE } from 'src/constants/config'

export const usePagination = (pageNumber: number) => {
  const pageIndex = pageNumber - 1

  return {
    skipCount: parseInt(LIMIT_PER_PAGE) * pageIndex,
  }
}

import styled from 'styled-components'

export const LoadingWrapper = styled.div`
  padding: 75px 0;
  text-align: center;
`

export const TableWrapper = styled.div`
  padding: 32px 0;

  th.MuiTableCell-root {
    font-weight: 700;
  }

  td.MuiTableCell-root,
  th.MuiTableCell-root {
    font-size: 16px;
  }

  tr {
    cursor: pointer;
  }

  tr:hover {
    background-color: #efefef;
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 12px;
  padding-bottom: 25px;

  ul.MuiPagination-ul li button {
    font-size: 16px;
  }
`

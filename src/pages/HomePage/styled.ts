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

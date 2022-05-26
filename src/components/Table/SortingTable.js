
import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination } from "react-table";
import { COLUMNS } from "./Coulmns";
import { GlobalFilter } from './GlobalFilter'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const SortingTable = ({ data }) => {
  const columns = useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable({
    columns, data, initialState: { pageIndex: 0 },
  },

    useGlobalFilter, useFilters, useSortBy, usePagination);


  return (
    <>
    <TableContainer>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup,idx) => (
              <TableRow key={idx} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column,idx) => (
                  <th key={idx} >
                    <TableRow>
                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')} {column.isSorted ? (column.isSortedDesc ? '🔽' : '⬆️') : ''}</TableCell>
                    </TableRow>
                    <TableCell>{column.canFilter ? column.render('Filter') : null}</TableCell>
            
                  </th>
                ))}
              </TableRow>
            ))}

          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {
              page.map((row,idx) => {
                prepareRow(row)
                return (
                  <TableRow key={idx} {...row.getRowProps()}>
                    {
                      row.cells.map((cell,idx) => {
                            return <TableCell key={idx}{...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                      })
                    }
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <div className="pagination" style={{padding:'20px'}}>

<button onClick={() => previousPage()} disabled={!canPreviousPage}>
  {'<'}
</button>{' '}
<button onClick={() => nextPage()} disabled={!canNextPage}>
  {'>'}
</button>{' '}

<span>
  page{' '}
  <strong>
    {pageIndex + 1} from {pageOptions.length}
  </strong>{' '}
</span>
<span>
  | search page:{' '}
  <input

    type="number"
    defaultValue={pageIndex + 1}
    onChange={e => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0
      gotoPage(page)
    }}
    style={{ width: '100px', borderRadius: '5px' }}
  />
</span>{' '}
<select
  style={{ borderRadius: '5px' }}
  value={pageSize}
  onChange={e => {
    setPageSize(Number(e.target.value))
  }}
>
  {[10, 20, 30, 40, 50].map(pageSize => (
    <option key={pageSize} value={pageSize}>
      Show {pageSize}
    </option>
  ))}
</select>
</div>
      </TableContainer>
    </>
  );
}
export default SortingTable;
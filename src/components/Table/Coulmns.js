import { ColumnFilter } from './ColumnFilter'

export const COLUMNS = [
    {
        Header: 'Company',
        accessor: 'display_name',
        Filter: ColumnFilter
    },
    {
        Header: 'Country',
        accessor: 'country',
        Filter: ColumnFilter
    },
    {
        Header: 'Installs',
        accessor: 'installs',
        Filter: ColumnFilter
    },
    {
        Header: 'Cost',
        accessor: 'cost',
        Filter: ColumnFilter
    },
    {
        Header: 'Revenue',
        accessor: 'revenue',
        Filter: ColumnFilter
    },
    
]
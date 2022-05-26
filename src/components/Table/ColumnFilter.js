import TextField from '@mui/material/TextField';
export const ColumnFilter = ({ column }) => {
    const { filterValue, setFilter } = column
    return (
                    <TextField 
                    style={{textAlign:'center'}}
                    variant="outlined"
                    label="Type to filter..." 
                    value={filterValue || ''} 
                    onChange={e => setFilter(e.target.value)} />
    )
}
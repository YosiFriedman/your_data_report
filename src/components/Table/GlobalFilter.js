import TextField from '@mui/material/TextField';

export const  GlobalFilter = ({filter, setFilter}) => {
    return (
      <>
            <span>
              {''}
                <TextField 
                 placeholder= 'Search All' 
                 value={filter || ''}
                 onChange={ e => setFilter(e.target.value)}/>
            </span>
            </>

    )
}
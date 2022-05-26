import './App.css';
import { useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import SortingTable from './components/Table/SortingTable';
import axios from 'axios';

function App() {
const [data, setData] = useState([])

useEffect(()=> {
axios.get('http://localhost:3500/company').then((res) => {
  setData(res.data)
}).catch((err) => {
  console.log(err)
})
},[])
  return (
    <>
      <NavBar/>
      <div className='App'>
      <SortingTable data={data}/>
      </div>
    </>
  );
}

export default App;

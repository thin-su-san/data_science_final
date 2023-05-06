import COLLEGE_DATA from "./assets/college_with_cluster.json";
import CLUSTER_DATA from "./assets/cluster_with_colleges.json";
import './App.css';
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { COLUMNS } from './components/columns.js';

function App() {

  const [search, setSearch] = useState('');
  const [colleges, setColleges] = useState([]);
  const cluster = Object.values(COLLEGE_DATA).find(e => e.name === search);
  // const colleges = Object.values(CLUSTER_DATA).find(e => e.cluster === cluster.cluster);

  const click = () => {
    alert(search)
    const collegeData = Object.values(CLUSTER_DATA).find(e => e.cluster === cluster.cluster)
    setColleges(collegeData)
    // setColleges(collegeData.colleges)
  }
  const onSearchChange = event => {
    setSearch(event.target.value)
  }

  console.log('colleges')
  console.log(colleges);
  console.log(COLUMNS);

  return (
    <div className="App">
      <input onChange={onSearchChange} value={search}/>
      <button onClick={click}>Search</button>
      {/* <BasicTable colleges={colleges}/> */}

      <div className="container mt-5">
        <DataTable
          columns={COLUMNS}
          data={colleges.colleges}
          fixedHeader
        ></DataTable>
      </div>
      
    </div>
  );
}

export default App;

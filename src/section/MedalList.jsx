import React from 'react'
import Table from '../components/Table';
import { tableHead } from '../data/medalListLayoutData';
import MedalsRowByCountry from '../components/MedalsRowByCountry';

function MedalList({medalList, setMedalList}) {
  return (
    <div id="medalList">
      <Table 
        tableHead={tableHead}
        tableRow={<MedalsRowByCountry rows={medalList} setNewRows={setMedalList} />}
      />
  </div>
  )
}

export default React.memo(MedalList);

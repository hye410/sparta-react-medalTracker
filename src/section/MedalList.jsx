import React from 'react'
import Table from '../components/Table';
import { tableHead } from '../data/MedalListLayoutData';
import MedalsRowByCountry from '../components/MedalsRowByCountry';

function MedalList({medalList}) {
  return (
    <div id="medalList">
    <Table 
      tableHead={tableHead}
      tableRow={<MedalsRowByCountry rows={medalList} />}
    />
  </div>
  )
}

export default React.memo(MedalList);

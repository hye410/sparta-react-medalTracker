import React, { useState } from 'react'
import Table from '../components/Table';
import MedalsRowByCountry from '../components/MedalsRowByCountry';
import Sorting from '../components/Sorting';
import { sortList, tableHead } from '../data/medalListLayoutData';
import { INPUT_VALUES } from '../constant/constant';

const { COUNTRY } = INPUT_VALUES;

function MedalList({medalList, setMedalList}) {
  const [sortBy, setSortBy] = useState(sortList[0].value);

  const sorting = (list) => {
    return [...list].sort((a,b) => {
      if(sortBy === COUNTRY.value) return a[sortBy].localeCompare(b[sortBy],'ko');
      else return b[sortBy] - a[sortBy];
    })
  };

  const handleSort = (e) => {
    const { value } = e.target;
    setSortBy(value);
    sorting(medalList);
  };

  return (
    <div id="medalList">
      <Sorting sort={sortList} handleSort={handleSort}/>
      <Table 
        tableHead={tableHead}
        tableRow={<MedalsRowByCountry rows={sorting(medalList)} setNewRows={setMedalList} />}
      />
  </div>
  )
}

export default React.memo(MedalList);

import React, { useCallback, useEffect, useState } from 'react'
import Table from '../components/Table';
import { tableHead } from '../data/medalListLayoutData';
import MedalsRowByCountry from '../components/MedalsRowByCountry';
import Sorting from '../components/Sorting';

const sortingData = [
  {
    text : '국가명 순',
    value : 'country'
  },
  {
    text : '금메달 순',
    value : 'gold'
  },
  {
    text : '은메달 순',
    value : 'silver'
  },
  {
    text : '동메달 순',
    value : 'bronze'
  }
]

function MedalList({medalList, setMedalList}) {

  const [sortBy, setSortBy] = useState(sortingData[0].value);

  useEffect(() => {
    sorting(medalList);
  },[sortBy])

  const sorting = useCallback((list) => {
    return [...list].sort((a,b) => {
      if(sortBy === 'country') return a[sortBy].localeCompare(b[sortBy]);
      else return b[sortBy] - a[sortBy];
    })
  },[sortBy])

  const handleSort = (e) => {
    const { value } = e.target;
    setSortBy(value);
  }

  return (
    <div id="medalList">
      <Sorting sort={sortingData} handleSort={handleSort}/>
      <Table 
        tableHead={tableHead}
        tableRow={<MedalsRowByCountry rows={sorting(medalList)} setNewRows={setMedalList} />}
      />
  </div>
  )
}

export default React.memo(MedalList);

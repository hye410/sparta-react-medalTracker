import React, { useCallback, useEffect, useState } from 'react'
import Table from '../components/Table';
import MedalsRowByCountry from '../components/MedalsRowByCountry';
import Sorting from '../components/Sorting';
import { INPUT_VALUES } from '../constant/constant';
import { tableHead } from '../data/MedalListLayoutData';
const { GOLD, SILVER, BRONZE, COUNTRY } = INPUT_VALUES;

const sortingData = [
  {
    text : `${COUNTRY.name} 순`,
    value : COUNTRY.value
  },
  {
    text : `${GOLD.name} 순`,
    value : GOLD.value
  },
  {
    text : `${SILVER.name} 순`,
    value : SILVER.value
  },
  {
    text : `${BRONZE.name} 순`,
    value : BRONZE.value
  },
  {
    text : '총 합계 순',
    value : 'sum'
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

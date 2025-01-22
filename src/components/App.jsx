import { useState } from 'react';
import MedalList from '../section/\bMedalList';
import MedalForm from '../section/MedalForm';
function App() {
  const [medalList, setMedalList] = useState([]);
  return (
    <article id="main">
      <header>
        <h1>2024 파리 올림픽</h1>
      </header>
      <section id="medalPage">
        <MedalForm 
        medalList={medalList}
        setMedalList={setMedalList}
        />
        {
          medalList.length === 0 ?
          <div className="noData">아직 추가된 국가가 없습니다. 메달을 추적하세요.</div>
          : <MedalList medalList={medalList} setMedalList={setMedalList} />
        }
    
      </section>
    </article>
  )
}

export default App

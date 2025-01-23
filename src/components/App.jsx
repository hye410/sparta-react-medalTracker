import { useState } from 'react';
import MedalList from '../section/MedalList';
import MedalForm from '../section/MedalForm';
import { getLocalStorage } from '../utils/handleLocalStorage';
import { LOCAL_MEDAL_LIST_KEY } from '../constant/constant';
import EmptyMedalList from './EmptyMedalList';

const INIT_MEDAL_LIST = getLocalStorage(LOCAL_MEDAL_LIST_KEY);
function App() {
  const [medalList, setMedalList] = useState(INIT_MEDAL_LIST); // 테이블 리스트로 초기값은 로컬 스토리지에 저장된 값을 사용함
  return (
    <div id="container">
    <article id="main">
      <header>
        <h1>2024 파리 올림픽</h1>
      </header>
      <section id="medalSection">
        {/* -------사용자 input 입력 영역-------- */}
          <MedalForm 
          medalList={medalList}
          setMedalList={setMedalList}
          />
        {/* -------메달 리스트 테이블 영역-------- */}
        {
          medalList.length === 0 ?
            <EmptyMedalList />
          : <MedalList 
              medalList={medalList} 
              setMedalList={setMedalList} 
            />
        }
    
      </section>
    </article>
    </div>
  )
}

export default App

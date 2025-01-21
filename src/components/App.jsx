import TextField from './TextField';
import Table from './Table';
import Button from './Button';


function App() {
  return (
    <article id="main">
      <header>
        <h1>2024 파리 올림픽</h1>
      </header>
      <section id="medalPage">
      <div className="searchField">
        <TextField />
        <TextField />
        <TextField />
        <TextField />
        <Button />
        <Button />
        </div>
        <div id="medalList">
            <Table />
          </div>
      </section>
    </article>
  )
}

export default App

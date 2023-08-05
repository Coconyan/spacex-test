import LaunchesList from 'components/LaunchesList/LaunchesList';
import './styles/index.scss';
import { useState } from 'react';

function App() {
  const [sort, setSort] = useState(true);

  const handleSort = () => {
    setSort((prev) => !prev);
  }

  return (
    <div className="app">
      <button onClick={handleSort}>
        Set sort {sort ? "OLD FIRST" : "NEW FIRST"}
      </button>
      <LaunchesList sort={sort} />
    </div>
  );
}

export default App;
import { useEffect, useState } from 'react'
import ResultItem from './components/ResultItem';
import '../src/App.css'

function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const info = await response.json();
      setResults(await info.results);
    }
    fetchData();
  }, []);
  return (
    <div className="App flex bg-gradient-to-br from-[#3D550C] to-[#ECF87F] items-center justify-center overflow-hidden">
      <div className="donut border-[20px] p-32 absolute top-[-128px] rounded-full right-[300px]"></div>
      <div className="donut border-[20px] p-32 absolute bottom-[-880px] rounded-full left-[-90px]"></div>
      <div>
      <h1 className="text-5xl font-bold text-center text-[black] pt-10 underline">
        ScoreCard
      </h1>
      <div className='rounded-3xl m-12 p-12'>
        {results && results.map((result) => {
          return <ResultItem result={result} />
        })}
      </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchRecords();
      setRecords(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <header className="p-8">
          <h1 className="text-xl font-semibold">Service Records</h1>
        </header>
        <section className="flex flex-row lg:flex-col">
          <RecordList records={records}/>
        </section>
      </main>
    </>
  );
}

export default App

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import SeznamZaposlenih from "./components/SeznamZaposlenih";
import DodajZaposlenega from "./components/DodajZaposlenega";

function App() {
  const [search, setSearch] = useState("");
  const [zaposleni, setZaposleni] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = "http://dummy.restapiexample.com/api/v1/employees";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.get(apiUrl);
        console.log(result);
        setZaposleni(result.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  const searchHandler = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };

  return (
    <div className="App">
      <header>
        <h1>Urejevalnik zaposlenih</h1>
      </header>

      <main>
        <DodajZaposlenega zaposleni={zaposleni} setZaposleni={setZaposleni} />
        <Search searchHandler={searchHandler} />
        <SeznamZaposlenih
          zaposleni={zaposleni}
          loading={loading}
          input={search}
          setZaposleni={setZaposleni}
        />
      </main>
    </div>
  );
}

export default App;

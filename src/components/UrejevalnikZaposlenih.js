import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from "axios";
import SeznamZaposlenih from "./SeznamZaposlenih";

function UrejevalnikZaposlenih() {
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
    //console.log(zaposleni);
  }, []);

  const searchHandler = (e) => {
    const searchInput = e.target.value;
    console.log(searchInput);
    //console.log(zaposleni);
    setSearch(searchInput);
  };

  return (
    <div className="App">
      <header>
        <h1>Urejevalnik zaposlenih</h1>
      </header>

      <main>
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

export default UrejevalnikZaposlenih;

import React, { useState } from "react";
import Zaposlen from "./Zaposlen";
import ZaposlenDetail from "./ZaposlenDetail";

const SeznamZaposlenih = ({ zaposleni, loading, input, setZaposleni }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  if (loading) {
    return (
      <section>
        <h2>Loading...</h2>;
      </section>
    );
  }

  return (
    <section>
      <ul className="list-group mb-4">
        {zaposleni
          .filter((zaposlen) =>
            zaposlen.employee_name.toLowerCase().includes(input)
          )
          .map((el) => (
            <Zaposlen
              key={el.id}
              zaposlen={el}
              setModalIsOpen={setModalIsOpen}
              setSelected={setSelected}
            />
          ))}
      </ul>
      <ZaposlenDetail
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        zaposlen={selected}
        zaposleni={zaposleni}
        setZaposleni={setZaposleni}
      />
    </section>
  );
};

export default SeznamZaposlenih;

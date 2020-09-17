import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import axios from "axios";
import uuid from "react-uuid";

const DodajZaposlenega = ({ zaposleni, setZaposleni }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formName, setFormName] = useState("");
  const [formAge, setFormAge] = useState("");
  const [formSalary, setFormSalary] = useState("");

  const postApiUrl = "http://dummy.restapiexample.com/api/v1/create";

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedZaposlen = {};
    modifiedZaposlen.id = uuid();
    modifiedZaposlen.employee_name = formName;
    modifiedZaposlen.employee_age = formAge;
    modifiedZaposlen.employee_salary = formSalary;

    const fetchData = async () => {
      try {
        const zapObj = JSON.stringify(modifiedZaposlen);
        const result = await axios.post(postApiUrl, zapObj);
        console.log(result);
        setZaposleni([...zaposleni, modifiedZaposlen]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    setFormName("");
    setFormAge("");
    setFormSalary("");

    setIsOpen(false);
  };

  return (
    <>
      <section className="dodajBtn">
        <Button onClick={() => setIsOpen(true)} variant="success">
          Dodaj Zaposlenega
        </Button>
      </section>

      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <Button
          className="closeBtn"
          variant="danger"
          onClick={() => setIsOpen(false)}
        >
          X
        </Button>
        <div className="forma">
          <h2>Dodaj Zaposlenega</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Ime in priimek</label>
            <input
              value={formName}
              type="text"
              onChange={(e) => setFormName(e.target.value)}
              id="name"
            />
            <label htmlFor="age">Starost</label>
            <input
              value={formAge}
              type="number"
              onChange={(e) => setFormAge(e.target.value)}
              id="age"
            />
            <label htmlFor="salary">Plača</label>
            <input
              value={formSalary}
              type="number"
              onChange={(e) => setFormSalary(e.target.value)}
              id="salary"
            />
            <Button type="submit" variant="primary">
              Potrdi spremembo
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default DodajZaposlenega;

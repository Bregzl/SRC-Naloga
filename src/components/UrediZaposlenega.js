import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const UrediZaposlenega = ({
  zaposlen,
  handleChangeZaposleni,
  setIsUrediOpen,
}) => {
  const [formName, setFormName] = useState(zaposlen.employee_name);
  const [formAge, setFormAge] = useState(zaposlen.employee_age);
  const [formSalary, setFormSalary] = useState(zaposlen.employee_salary);

  const putApiUrl = "http://dummy.restapiexample.com/api/v1/update/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedZaposlen = {};
    modifiedZaposlen.name = formName;
    modifiedZaposlen.age = formAge;
    modifiedZaposlen.salary = formSalary;
    handleChangeZaposleni(modifiedZaposlen);

    const fetchData = async () => {
      try {
        //
        const zapObj = JSON.stringify(modifiedZaposlen);
        console.log(zapObj);
        const result = await axios.put(putApiUrl + zaposlen.id);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();

    setIsUrediOpen(false);
  };

  return (
    <div className="forma">
      <h2>Uredi zaposlenega</h2>
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
  );
};

export default UrediZaposlenega;

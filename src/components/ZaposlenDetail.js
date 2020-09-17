import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Button from "react-bootstrap/Button";
import UrediZaposlenega from "./UrediZaposlenega";
Modal.setAppElement("#root");

const ZaposlenDetail = ({
  zaposlen,
  isOpen,
  setModalIsOpen,
  zaposleni,
  setZaposleni,
}) => {
  const [isUrediOpen, setIsUrediOpen] = useState(false);
  const apiDeleteUrl = "http://dummy.restapiexample.com/api/v1/delete/";

  const handleChangeZaposleni = (modifiedZaposleni) => {
    zaposlen.employee_name = modifiedZaposleni.name;
    zaposlen.employee_age = modifiedZaposleni.age;
    zaposlen.employee_salary = modifiedZaposleni.salary;
    console.log(zaposlen);
  };

  const handleDelete = () => {
    const filteredZaposleni = zaposleni.filter((el) => el.id !== zaposlen.id);

    const deleteUser = async () => {
      try {
        const result = await axios.delete(apiDeleteUrl + zaposlen.id);
        console.log(result);
        setZaposleni(filteredZaposleni);
        setModalIsOpen(false);
      } catch (e) {
        console.log(e);
        return <h1>napaka pri brisanju</h1>;
      }
    };

    deleteUser();
  };
  if (isUrediOpen) {
    return (
      <>
        <Modal
          isOpen={isUrediOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setIsUrediOpen(false)}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Button
            className="closeBtn"
            variant="danger"
            onClick={() => setIsUrediOpen(false)}
          >
            X
          </Button>
          <UrediZaposlenega
            zaposlen={zaposlen}
            handleChangeZaposleni={handleChangeZaposleni}
            setIsUrediOpen={setIsUrediOpen}
          ></UrediZaposlenega>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Modal
          isOpen={isOpen}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => setModalIsOpen(false)}
          className="Modal"
          overlayClassName="Overlay"
        >
          <Button
            className="closeBtn"
            variant="danger"
            onClick={() => setModalIsOpen(false)}
          >
            X
          </Button>

          <h2>{zaposlen.employee_name}</h2>
          <p>{`Starost: ${zaposlen.employee_age}`}</p>
          <p>{`Plača: ${zaposlen.employee_salary}`}</p>

          <Button
            style={{
              marginBottom: "5px",
            }}
            variant="warning"
            onClick={() => {
              setIsUrediOpen(true);
            }}
          >
            Uredi zaposlenega
          </Button>

          <Button onClick={handleDelete} variant="danger">
            Brisi zaposlenega
          </Button>
        </Modal>
      </>
    );
  }
};

export default ZaposlenDetail;

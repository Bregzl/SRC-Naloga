import React from "react";

const Zaposlen = ({ zaposlen, setModalIsOpen, setSelected }) => {
  return (
    <>
      <li
        key={zaposlen.id}
        className="list-group-item"
        onClick={() => {
          setModalIsOpen(true);
          setSelected(zaposlen);
        }}
      >
        {zaposlen.employee_name}
      </li>
    </>
  );
};

export default Zaposlen;

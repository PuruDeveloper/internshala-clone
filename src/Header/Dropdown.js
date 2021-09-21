import React from "react";

function Dropdown({ listElements }) {
  return (
    <div>
      {listElements.map((listEl, index) => {
        <p>{listEl}</p>;
      })}
    </div>
  );
}

export default Dropdown;

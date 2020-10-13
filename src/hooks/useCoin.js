import React, { Fragment, useState } from "react";

const useCoin = () => {
  //State of our custom hook
  const [state, setSate] = useState("");
  const Select = () => (
    <Fragment>
      <label>Currency</label>
      <select>
        <option value="EUR">Euros</option>
      </select>
    </Fragment>
  );

  return [state, Select, setSate];
};

export default useCoin;

import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { deleteEquipment } from '../action/actions';
function TR({ item, index }) {
  const [missing, setMissing] = useState(0);
  const handleChange = (e) => {
    setMissing(e.target.value);
  };
  const dispatch = useDispatch();
  const handleclick = () => {
    dispatch(deleteEquipment(item.name));
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        {item.name} <button onClick={handleclick}>x</button>
      </th>
      <th>{item.fullQuantity}</th>
      <th>
        <input
          type='number'
          placeholder='current quantity'
          min={0}
          // max={item.fullQuantity}
          onChange={handleChange}
        ></input>
      </th>
      <th className='missing'>{item.fullQuantity - missing}</th>
    </tr>
  );
}

export default TR;

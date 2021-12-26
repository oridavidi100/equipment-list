import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEquipment } from '../action/actions';

const AddItem = () => {
  const dispatch = useDispatch();
  const [name, setItemName] = useState(null);
  const [fullQuantity, setFullQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEquipment({ name, fullQuantity }));
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item's name</label>
        <input onChange={(e) => setItemName(e.target.value)} type='text' />
        <label>Full quantity</label>
        <input onChange={(e) => setFullQuantity(e.target.value)} type='number' />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

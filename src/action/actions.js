const workerEnters = (fullName, workPlace, date) => {
  return {
    type: 'INSERT_EMPLOYE',
    payload: {
      fullName,
      workPlace,
      date,
    },
  };
};
const checkEquipment = (missingArray) => {
  return {
    type: 'CHECK_EQUIPMENT',
    payload: missingArray,
  };
};

const addEquipment = (equipment) => {
  console.log(equipment);
  return {
    type: 'ADD_EQUIPMENT',
    payload: equipment,
  };
};
const deleteEquipment = (name) => {
  console.log(name);
  return {
    type: 'DELETE_EQUIPMENT',
    payload: name,
  };
};
const insertSignature = (imageUrl) => {
  return {
    type: 'INSERT_SIGNATURE',
    payload: imageUrl,
  };
};
export { workerEnters, checkEquipment, addEquipment, deleteEquipment, insertSignature };

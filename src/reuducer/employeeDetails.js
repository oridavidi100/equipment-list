import { fullEquipmentList } from '../DB/data';

const initalState = {
  fullName: '',
  workPlace: '',
  date: '',
  signUrl: '',
};
const employeeReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'INSERT_EMPLOYE':
      return {
        fullName: action.payload.fullName,
        workPlace: action.payload.workPlace,
        date: action.payload.date,
      };
    case 'INSERT_SIGNATURE':
      console.log(action.payload);
      return { ...state, signUrl: action.payload };
    default:
      return state;
  }
};

export default employeeReducer;

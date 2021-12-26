import { fullEquipmentList } from '../DB/data';
import { fullQuantityNames } from '../DB/data';
// const initaldata = {   itemName: '', fullQuantity: '', currentQuantity: '', missing: '' };
const initaldata = { fullEquipmentList, missing: fullQuantityNames };
const equipmentReducer = (state = initaldata, action) => {
  switch (action.type) {
    case 'ADD_EQUIPMENT':
      return {
        ...state,
        fullEquipmentList: [...state.fullEquipmentList, action.payload],
        missing: [...state.missing, { name: action.payload.name, missingQuantity: 0 }],
      };
    case 'CHECK_EQUIPMENT':
      const missing = action.payload;
      console.log(missing);
      for (let i = 0; i < missing.length; i++) {
        state.missing[i].missingQuantity += missing[i];
        state.fullEquipmentList[i].fullQuantity -= missing[i];
      }
      console.log(state.fullEquipmentList);
      return { ...state, fullEquipmentList: [...state.fullEquipmentList], missing: [...state.missing] };
    case 'DELETE_EQUIPMENT':
      const name = action.payload;
      const arr = state.fullEquipmentList.filter((li) => {
        return li.name !== name;
      });
      const missingArr = state.missing.filter((li) => {
        return li.name !== name;
      });
      return { ...state, fullEquipmentList: [...arr], missing: [...missingArr] };

    default:
      return state;
  }
};

export default equipmentReducer;

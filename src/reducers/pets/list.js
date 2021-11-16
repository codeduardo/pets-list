import { combineReducers } from "redux";
import { PETS_DATA } from "../../actions/pets/list";

const data = (state = {}, action) => {
  switch (action.type) {
    case PETS_DATA:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({ data });

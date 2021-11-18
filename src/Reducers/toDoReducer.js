import {
  ADD_DATA,
  DELETE_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
  UPDATE_EDITED_TEXT,
  CLOSE_MODAL,
  DELETE_ALL,
  CHECK,
} from '../Actions/type';

const initialState = {
  listData: [],
  inputData: '',
  editedIndex: null,
  modal: false,
  updateData: '',
  updatedListData: '',
  isChecked: false,
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        listData: [...state.listData, action.payload],
      };
    case DELETE_ITEM:
      return {
        ...state,
        listData: state.listData.filter(
          (item, index) => index !== action.payload
        ),
      };
    case EDIT_ITEM:
      return {
        ...state,
        updateData: state.listData[action.payload].text,
        editedIndex: action.payload,
        modal: true,
      };
    case UPDATE_EDITED_TEXT:
      return {
        ...state,
        updateData: action.payload,
      };
    case UPDATE_ITEM:
      let updatedItems = [...state.listData];
      updatedItems[state.editedIndex] = {
        text: state.updateData,
        isChecked: false,
      };
      return {
        ...state,
        editedIndex: null,
        updateData: '',
        modal: false,
        listData: [...updatedItems],
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case DELETE_ALL:
      return {
        ...state,
        listData: [],
      };
    case CHECK:
      let checkedItem = [...state.listData];
      checkedItem[action.payload].isChecked =
        !checkedItem[action.payload].isChecked;
      return {
        ...state,
        listData: [...checkedItem],
      };
    default:
      return state;
  }
};
export default toDoReducer;

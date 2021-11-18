import {
  ADD_DATA,
  DELETE_ITEM,
  EDIT_ITEM,
  UPDATE_ITEM,
  UPDATE_EDITED_TEXT,
  CLOSE_MODAL,
  DELETE_ALL,
  CHECK,
} from './type';

export const addData = (item) => {
  return {
    type: ADD_DATA,
    payload: item,
  };
};
export const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};
export const editItem = (index) => {
  return {
    type: EDIT_ITEM,
    payload: index,
  };
};
export const updateEditedText = (text) => {
  return {
    type: UPDATE_EDITED_TEXT,
    payload: text,
  };
};
export const updateItem = () => {
  return {
    type: UPDATE_ITEM,
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};
export const check = (index) => {
  return {
    type: CHECK,
    payload: index,
  };
};

import {
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT
} from "./types";
import Axios from "axios";

//get contactS - multiple contacs
export const getContacts = () => async dispatch => {
  const res = await Axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};
//get contact - single contact - potrzebne id w URL dodaj ${id}
export const getContact = id => async dispatch => {
  const res = await Axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};
export const deleteContact = id => async dispatch => {
  // this try catch() is only temporary to permamanetly delete id from API JSONplaceholder, ktory nie jest prawdziwa DatabAse ani API
  try {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};
export const addContact = contact => async dispatch => {
  const res = await Axios.post(
    "https://jsonplaceholder.typicode.com/users",
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

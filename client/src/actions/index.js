import {FETCH_USER} from "./actionsTypes";
import {ADD_ENTRY} from "./actionsTypes";
import axios from "axios";

export const fetchUser = () => {
    return async dispatch => {
        const res = await axios.get("/api/current_user");
        dispatch({
            type: FETCH_USER,
            payload: res.data  
        });
    }
};

export const addEntry = (entry) => {
    return async dispatch => {
        dispatch({
            type: ADD_ENTRY,
            entry
        });
    };
};
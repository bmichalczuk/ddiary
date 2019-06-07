import {FETCH_USER} from "./actionsTypes";
import {ADD_DIARY_ENTRY} from "./actionsTypes";
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

export const addDiaryEntry = (entry) => {
    return async dispatch => {
        dispatch({
            type: ADD_DIARY_ENTRY,
            entry
        });
    };
};
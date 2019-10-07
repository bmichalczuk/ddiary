import {FETCH_USER, UPDATE_USER} from "./actionsTypes";
import axios from "axios";

export const fetchUser = () => {
    console.log("fetch user!!!");
    return async dispatch => {
        const res = await axios.get("/api/current_user");
        dispatch({
            type: FETCH_USER,
            payload: res.data  
        });
    }
};

export const updateUser = (user) => {
    return {
        type: UPDATE_USER,
        user
    }
}


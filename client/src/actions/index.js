import {FETCH_USER} from "./actionsTypes";
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


import { localUserServ } from "../../services/localService";
import { SET_USER_LOGIN } from "../constants/loginConstant";

const initialState = {
    userInfo: localUserServ.get()
}

let loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_USER_LOGIN:
            return { ...state, userInfo: payload }
        default:
            return state
    }
}

export default loginReducer
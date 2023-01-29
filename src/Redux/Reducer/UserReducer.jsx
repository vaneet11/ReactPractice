import { Login } from "../Constants/Constants"

const initialState = {
    isLoading: false,
    dataList: [],
    currentUser: {}
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case Login:
            return {
                ...state,
                currentUser: action.payload,
            }
        default: return state;
    }

}
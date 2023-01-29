import { Login } from "../Constants/Constants"

export const login = async (dispatch) => {
    return () => {
        dispatch({
            type: Login,
            payload: 'login'
        })
    }
}
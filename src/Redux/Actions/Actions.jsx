import { Login } from "../Constants/Constants"

export const login = (values) => {
    return (dispatch) => {
        dispatch({
            type: Login,
            payload: values
        })
    }
}
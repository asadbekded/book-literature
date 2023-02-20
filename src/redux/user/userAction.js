import { REMOVE_USER, USER } from "./userType"


export const userAction = (user) => {
    return {
        type: USER,
        payload: user
    }
}

export const removeUserAction = () => {
    return {
        type: REMOVE_USER,
        payload: ''
    }
}
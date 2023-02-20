import { REMOVE_TOKEN, TOKEN } from "./tokenType"


export const tokenAction = (token) => {
    return{
        type: TOKEN,
        payload: token
    }
}

export const removeTokenAction = () => {
    return{
        type: REMOVE_TOKEN,
        payload: ''
    }
}
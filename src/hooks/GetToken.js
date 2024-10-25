import { store } from "../stores/store"

const getToken = () => {
    const initial = store.getState().token.token
    const token = initial.payload
    console.log(token)
    return token
}

export default getToken
import { fetchInstance } from "../fetch";

const loginAPI = async(username,password) => {
    const option = {
        url: '/api/user/login',
        method: 'post',
        body: {
            username: username,
            password: password
        }   
    }
    const response = await fetchInstance(option)

    return response
}

export default loginAPI
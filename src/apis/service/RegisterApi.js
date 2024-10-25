import { fetchInstance } from "../fetch";

const useRegisterApi = async (username, password) => {
    const option = {
        url: '/api/user/reg',
        method: 'post',
        body:{
            username: username,
            password: password
        }
    }

    const response = fetchInstance(option)

    return response
}

export default useRegisterApi
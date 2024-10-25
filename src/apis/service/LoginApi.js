import { fetchInstance } from "../fetch";

const useLoginAPI = async(username,password) => {
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

export default useLoginAPI
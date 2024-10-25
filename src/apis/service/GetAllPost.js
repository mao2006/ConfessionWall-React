import { fetchInstance } from "../fetch";
import { getToken } from "../../hooks";

const getAllPost = async () => {

    const token = getToken()

    const option = {
        url: '/api/confession',
        method: 'get',
        Authorization: token
    }

    const response = await fetchInstance(option)

    return response
}

export default getAllPost
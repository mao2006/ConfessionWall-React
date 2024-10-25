import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { update } from "../../stores/stores/tokenstore"

const MainPage = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token.token)
    const handleLogout = () => {
        dispatch(update(''))
        console.log(token.payload)
    }
    return(
        <>
            <Button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            onClick={handleLogout}>
                退出登陆
            </Button>
        </>
    )
}

export default MainPage
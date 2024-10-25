import { Button, Layout, Menu } from "antd"
import { useDispatch } from "react-redux"
import { update } from "../../stores/stores/tokenstore"
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Sider, Content } = Layout;


const MainMenu = () => {
    const navigate = useNavigate()
    const items = [
        { key: '/main/all', label: '表白广场' },
        { key: '/main/mine',  label: '我的表白' },
        { key: '/main/me',  label: '个人主页' },
    ]

    const handleSelect = (e) => {
        navigate(e.key)
    }
    return(
        <>
             <Menu
            mode="inline"
            className="bg-transparent absolute top-60px"
            items={items}
            onClick={handleSelect}
            />
        </>
    )
}

const LogoutButton = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(update(''))
    }
    return(
        <>
            <Button className="absolute left-15px bottom-75px"
            onClick={handleLogout}>
                    退出登陆
            </Button>
        </>
    )
}

const MainPage = () => {
    return(
        <> 
            <Layout className="bg-transparent h-screen">
                <Sider className="bg-transparent flex flex-col">
                    <MainMenu />
                    <LogoutButton />
                </Sider>
                <Content className="mt-20 ml-10 h-60vh overflow-auto">
                    <Outlet />
                </Content>
            </Layout>
        </>
    )
}

export default MainPage
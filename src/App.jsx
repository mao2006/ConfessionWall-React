import { Layout, } from 'antd'
import { Outlet } from 'react-router-dom'
// import { update } from './stores/stores/tokenstore'
// import { useDispatch,useSelector } from 'react-redux'

const { Header, Content } = Layout;




function App() {
  // const [count, setCount] = useState(0)
  // const navigate = useNavigate();

  
  
  return (
    <>
      <Layout className='bg-[url("./assets/background.jpg")] bg-contail bg-center h-100vh'>
        <Header className='bg-transparent'>
          <p className='text-white text-xl mt-10 ml-2'>表白墙</p>
        </Header>
        <Content>
          <Outlet></Outlet>
        </Content>
      </Layout>
    </>
  )
}

export default App

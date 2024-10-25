import { Card, Button, Form, Input, message } from 'antd';
import { useLoginAPI } from '../../apis';
import { useNavigate } from 'react-router-dom';
import { update } from '../../stores/stores/tokenstore';
import {  useDispatch } from 'react-redux';


const LoginPage = () => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    // const token = useSelector(state => state.token.token)
    const diapatch = useDispatch()
    
    // console.log(token.payload)

    const onFinish = async (values) => {
        // console.log(values.username,values.password)
        const {response} = await useLoginAPI(values.username,values.password)
        if(response.data.code===200){
            message.success("登录成功")
            diapatch(update(response.data.data.token))
            navigate('/main')
            // console.log(token.payload)
        }else{
            message.error(response.data.msg)
        }
    };
    const onFinishFailed = (errorInfo) => {
        messageApi.error("请输入账号密码")
        console.log(errorInfo)
    };
    return(
        <>
            {contextHolder}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
            
                <Card title="登录" bordered={false} style={{ width: 400 }}>
                    <Form
                        name="basic"
                        labelCol={{
                        span: 8,
                        }}
                        wrapperCol={{
                        span: 16,
                        }}
                        style={{
                        maxWidth: 600,
                        }}
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className='absolute right-0 bottom-0 underline text-blue-400' 
                    onClick={() => navigate('/register')}>
                        没有账号?点我注册
                    </div>
                </Card>
            </div>
        </>
    )
}

export default LoginPage
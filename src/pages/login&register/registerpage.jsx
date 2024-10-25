import { Card, Button, Form, Input, message } from 'antd';
import { RegisterApi } from '../../apis';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values) => {
        const {response} = await RegisterApi(values.username,values.password)
        if(response.data.code===200){
            navigate('/login')
            message.success("注册成功")
        }else{
            message.error(response.data.msg)
        }
    };
    const onFinishFailed = (errorInfo) => {
        messageApi.error("账号或密码有误")
        console.log(errorInfo)
    };
    return(
        <>
            {contextHolder}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
            
                <Card title="注册" bordered={false} style={{ width: 400 }}>
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
                            {
                                pattern: '^[a-zA-Z0-9_]{4,16}$',
                                message: '4-16位字母数字下划线',
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
                            {
                                pattern: '^[a-zA-Z0-9_]{8,32}$',
                                message: '8-32位字母数字下划线',
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
                    onClick={() => navigate('/login')}>
                        已有账号?点我登陆
                    </div>
                </Card>
            </div>
        </>
    )
}

export default RegisterPage
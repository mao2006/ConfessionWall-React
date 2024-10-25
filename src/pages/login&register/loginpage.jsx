import { Card, Button, Form, Input, message } from 'antd';
import loginAPI from "../../apis/service/LoginApi";
import Password from "antd/es/input/Password";


const LoginPage = () => {
    
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = async (values) => {
        const {response} = await loginAPI(values.username,values,Password)
        if(response.data.code===200){
            message.success("请求成功")
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
                </Card>
            </div>
        </>
    )
}

export default LoginPage
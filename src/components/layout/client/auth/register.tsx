import { useState } from 'react'
import { Form, Input, Button, Divider, message } from 'antd'
import type { FormProps } from 'antd'
import { loginAPI } from '@/services/api'

type FieldType = {
  fullName: string
  email: string
  password: string
  phone: string
}

const RegisterPage = () => {
  const [isSubmit, setIsSubmit] = useState(false)

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setIsSubmit(true)
    try {
      console.log('Form Values:', values);
      const res =await loginAPI("admin@gmail.com","123456")
      console.log("check",res)
      // ✅ Giả lập gọi API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      message.success('Đăng ký thành công!')
    } catch (error) {
      message.error('Đăng ký thất bại!')
    } finally {
      setIsSubmit(false)
    }
  }
  console.log("check",import.meta.env.VITE_BACKEND_URL)

  return (
    <div className='register-page'>
      <div className='main'>
        <div className='container'>
          <div className='wrapper'>
            <div className='heading'>
              <h2 className='text text-large'>Đăng ký tài khoản</h2>
              <Divider />
            </div>

            <Form
              name='form-register'
              layout='vertical'
              onFinish={onFinish}
              autoComplete='off'
            >
              <Form.Item<FieldType>
                label='Họ và tên'
                name='fullName'
                rules={[{ required: true, message: 'Họ tên không được bỏ trống!' }]}
              >
                <Input placeholder='Nhập họ và tên' />
              </Form.Item>

              <Form.Item<FieldType>
                label='Email'
                name='email'
                rules={[
                  { required: true, message: 'Email không được bỏ trống!' },
                  { type: 'email', message: 'Email không hợp lệ!' },
                ]}
              >
                <Input placeholder='Nhập email' />
              </Form.Item>

              <Form.Item<FieldType>
                label='Mật khẩu'
                name='password'
                rules={[{ required: true, message: 'Mật khẩu không được bỏ trống!' }]}
              >
                <Input.Password placeholder='Nhập mật khẩu' />
              </Form.Item>

              <Form.Item<FieldType>
                label='Số điện thoại'
                name='phone'
                rules={[{ required: true, message: 'Số điện thoại không được bỏ trống!' }]}
              >
                <Input placeholder='Nhập số điện thoại' />
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={isSubmit} // ✅ Nút loading
                  block
                >
                  {isSubmit ? 'Đang đăng ký...' : 'Đăng ký'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage

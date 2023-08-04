

// import React from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Form, Input } from 'antd';
// import { useNavigate } from 'react-router-dom';
// // import { useHistory } from 'react-router-dom'; // Use useHistory instead of useNavigate

// const Login = () => {
//   const navigate  = useNavigate(); // Use useHistory hook instead of useNavigate

//   const onFinish = (values) => {
//     if (values.username === 'empire' && values.password === 'password') {
//       navigate('/admin/entries/new'); // Use history.push to navigate to the dashboard
//     }
//   };

//   return (
//     <div className='flex  justify-center'>
//       <Form
//       name="login_form"
//       className="flex flex-col  justify-center  h-fit mt-24 space-y-5 justify-center p-8 md:w-[500px] lg:w-[600px] bg-blue-100 rounded-xl"
//       initialValues={{
//         remember: true,
//         username: 'empire',
//         password: 'password',
//       }}
//       onFinish={onFinish}
//     >
//       <p className="text-center font-extrabold text-2xl md:3xl p-2 font-sans">USER LOGIN</p>
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="flex h-8 items-center text-lg" />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input prefix={<LockOutlined className="flex h-8 items-center text-lg" />} type="password" placeholder="Password" />
//       </Form.Item>

//       <Form.Item className="grid w-full justify-center">
//         <Button type="primary" htmlType="submit" className="login-form-button rounded-xl bg-blue-500 w-24 h-10 text-xl hover:font-bold">
//           Login
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//   );
// };

// export default Login;



import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    if (values.username === 'empire' && values.password === 'password') {
      navigate('/admin/entries/new');
    }
  };

  return (
    <div className='flex justify-center items-center md:items-top  h-[80%]'>
      <Form
        name="login_form"
        className="flex flex-col h-fit mt-24 space-y-5 p-8 md:w-[500px] lg:w-[600px] bg-blue-100 rounded-xl"
        initialValues={{
          remember: true,
          username: 'empire',
          password: 'password',
        }}
        onFinish={onFinish}
      >
        <p className="text-center font-extrabold text-2xl md:text-3xl p-2 font-sans">USER LOGIN</p>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="flex h-8 items-center text-lg" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input prefix={<LockOutlined className="flex h-8 items-center text-lg" />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item className="grid w-full justify-center">
          <Button type="primary" htmlType="submit" className="login-form-button rounded-xl bg-blue-500 w-24 h-10 text-xl hover:font-bold">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

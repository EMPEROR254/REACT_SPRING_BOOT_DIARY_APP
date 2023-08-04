import React from 'react';
import { Button, Form, Input } from 'antd';

const PostEditor = ({submitter, initialValues}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // form.resetFields();
    
    submitter(values);
 
  };
  
  const { TextArea } = Input;
  return (
     <Form
     form={form}
      name="post editor form"
      className="flex-col text-lg justify-center  w-full h-fit  space-y-5 justify-center
        p-8 md:w-[700px] lg:w-[800px] bg-gray-100 rounded-xl"
      initialValues={initialValues}
      onFinish={onFinish}
    >
        <p className='text-center  font-extrabold text-2xl md:3xl p-2 font-sans'>
            EDITING ENTRY : {initialValues.title}
        </p>
        <p 
            className='italic font:serif text-lg'>
            Have a new point of view?
        </p>
      <Form.Item
        name="title"
        label={
            <p className='text-lg'>
                Title
            </p>
        }
        rules={[
          {
            required: true,
            message: 'Entry should have a title!',
          },
        ]}
      >
        <Input 
         placeholder="Title"
         className='h-12 text-lg' />
      </Form.Item>
      <Form.Item
        name="entry_body"
        label={
            <p className='text-lg '>
                Body
            </p>
        }
        rules={[
          {
            required: true,
            message: 'Entry must have a body!',
          },
        ]}
      >
        <TextArea
         rows={6}
         className='text-lg'
         placeholder="Today.."
         />
      </Form.Item>
    

   

      <Form.Item
        className='grid w-full justify-center' 
      >
        <Button
         type="primary"
          htmlType="submit"
           className="flex justify-center font-bold rounded-xl bg-blue-500
            items-center w-24 h-10 text-xl hover:font-bold">
          UPDATE
        </Button>
      </Form.Item>
    </Form>
  );
};
export default PostEditor;
import React from 'react';
import { Button, Form, Input } from 'antd';
import { errorNotification, successNotification } from '../services/Notification';
import { client } from '../services/Client';

const NewEntry = () => {
  const [form] = Form.useForm();
  const onFinish =async (values) => {
    client.post('/entries/new',{
      title:values.title,
      entry_body:values.entry_body,
    })
    .then(function (response) {
      successNotification("SUCCESS", "Entry saved successfully", "top");
      form.resetFields();
    })
    .catch(function (error) {
      errorNotification("Failure", error, "top");
      console.log(error);
    });
    
  };
  
  const { TextArea } = Input;

  return (
     <div>
      <Form
     form={form}
      name="new_entry"
      className="flex-col absolute ml-20 md:ml-56 text-lg justify-center ml-4 w-[80%]  h-fit mt-24 space-y-5 justify-center
        p-8 md:w-[700px] lg:w-[800px] bg-gray-100 rounded-xl"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
        <p className='text-center  font-extrabold text-2xl md:3xl p-2 font-sans'>
            NEW DIARY ENTRY
        </p>
        <p 
            className='italic font:serif text-lg'>
            How has your day been?
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
           className=" rounded-xl bg-blue-500 w-24 h-10 text-xl hover:font-bold">
          SAVE
        </Button>
      </Form.Item>
    </Form>
     </div>
  );
};
export default NewEntry;
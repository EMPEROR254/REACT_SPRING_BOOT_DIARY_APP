import React, { Fragment, useEffect, useState } from 'react';
import { Button, Modal, Popconfirm, Table } from 'antd';
import { client, getAllDiaryEntries } from '../services/Client';
import { errorNotification, successNotification } from '../services/Notification';
import PostEditor from './PostEditor';
import TimeAgo from 'react-timeago';


const Dashboard = () => {
  
  const [diaryEntries, setDiaryEntries] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const columns = [
    {
      title: 'Entry Id',
      dataIndex: 'entryId',
      key: 'entryId'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Last updated',
      key: 'updatedAt',
      render: (record) => <TimeAgo date={record.updatedAt}/>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Fragment>
          <Popconfirm
            placement='topRight'
            title={`Are you sure to delete ${record.entryId}`} 
            onConfirm={() => deleteEntry(record.entryId)} okText='Yes' cancelText='No'
            onCancel={e => e.stopPropagation()}>
            <Button 
              className='bg-red-400'
            type='danger'
             onClick={(e) => e.stopPropagation()}>Delete</Button>
          </Popconfirm>
          <Button
            className='bg-blue-500'
           style={{marginLeft: '5px'}}
            type='primary'
             onClick={() => openEditor(record)}>Edit</Button>
        </Fragment>
      ),
    }
  ];
  


  useEffect(() =>{
    fetchDiaryEntires();
  },[])

  const deleteEntry = async (id) => {
    await client.delete(`/entries/delete/${id}`)
    .then(response => {
      successNotification("Success", "Entry deleted successfully", "top");
      fetchDiaryEntires();
    })
    .catch(error => {
      errorNotification("Error", error, "top");
    });
 };
 

  const editEntrySubmitter =async (values) =>{
   closePostEditor();
  setSelectedEntry([]);
  await client.put(`/entries/update/${selectedEntry.entryId}`, {
    entryId: selectedEntry.entryId,
    createdAt: selectedEntry.createdAt,
    updatedAt: selectedEntry.updatedAt,
    title: values.title,
    entry_body: values.entry_body,
  })
    .then((response) => {
      successNotification("Success", "Entry updated successfully", "top");
      fetchDiaryEntires();
    })
    .catch((error) => {
     errorNotification("Error", error, "top");
    });
  }
  function openEditor(entry){
    setSelectedEntry(entry);
    setIsEditing(true);
  }

  // const openPostEditor=()=>
  //   setIsEditing(true);
  
  const closePostEditor=()=>
    setIsEditing(false);

  const fetchDiaryEntires =()=>{
    setIsFetching(true);
    getAllDiaryEntries()
    .then(res =>{
      setDiaryEntries(res.data);
    })
    .catch(err =>{
      errorNotification("Error!", err, "top");
    })
    .finally(
      setIsFetching(false)
    )
  }


  if(diaryEntries && diaryEntries.length){
    return (
      <>
         <Table
            className='absolute ml-20 md:ml-56 w-[80%] mt-8 md:mt-12'
            loading={isFetching}
              columns={columns}
              
              scroll={{
                x: 1300,
              }}
              dataSource={diaryEntries} />
  
            <Modal      
              open={isEditing}
              onOk={closePostEditor}
              onCancel={closePostEditor}
              width={1000}>
              
              {/* <PageHeader title={`${this.state.selectedPost.posttitle}`}/> */}
              
              <PostEditor 
                initialValues={selectedEntry} 
                submitter={editEntrySubmitter}
                />
            </Modal>
      </>
    )
   
};
        return(
         
           <Table
          className='w-[80%] ml-20 md:ml-56 mt-8 md:mt-12'
          loading={isFetching}
            columns={columns}
            
          />
      
        )
}
export default Dashboard;
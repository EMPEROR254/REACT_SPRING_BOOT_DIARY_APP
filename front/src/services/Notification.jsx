import { notification } from 'antd';
const openNotification = (type,message,description,placement) => {
  notification[type]({
    message: message,
    description: description,
    placement
  });
      
   
};


export const successNotification = (message, description, placement) =>
    openNotification('success', message, description, placement);

export const errorNotification = (message, description, placement) =>
    openNotification('error', message, description, placement);

export const infoNotification = (message, description, placement) =>
    openNotification('info', message, description, placement);

export const warningNotification = (message, description, placement) =>
    openNotification('warning', message, description, placement);
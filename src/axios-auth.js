import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  params: {
    key: 'AIzaSyDsb92h-vVP2-dzCMdF864HrPXoU-CKLD4' 
  }
});

export default instance;
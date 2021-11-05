import axios from 'axios';
import {API_HOST} from '../../utils';

export const signUpAction =
  ({dataRegister, navigation}) =>
  dispatch => {
    axios
      .post(`${API_HOST.uri}/users`, dataRegister)
      .then(res => {
        console.log('berhasil register!!');
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

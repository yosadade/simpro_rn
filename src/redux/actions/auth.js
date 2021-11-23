import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, showMessage, storeData} from '../../utils';

export const signUpAction = (dataRegister, navigation) => dispatch => {
  Axios.post(`${API_HOST.uri}/users`, dataRegister)
    .then(res => {
      const profile = res.data.data;

      storeData('userProfile', profile);
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(`${err?.message}`);
    });
};

export const signInAction = (_dataLogin, navigation) => dispatch => {
  let dataLogin = new FormData();
  dataLogin.append('email');
  dataLogin.append('password');

  Axios.post(`${API_HOST.uri}/login`, _dataLogin)
    .then(res => {
      dispatch(setLoading(true));
      const token = res.data.token;
      const profile = res.data.data;
      storeData('userProfile', profile);
      storeData('token', token);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(`${err?.message}`);
    });
};

import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, showMessage} from '../../utils';

export const signUpAction =
  ({dataRegister, navigation}) =>
  dispatch => {
    Axios.post(`${API_HOST.uri}/users`, dataRegister)
      .then(() => {
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(`${err?.message}`);
      });
  };

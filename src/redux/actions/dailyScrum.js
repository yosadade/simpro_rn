import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, showMessage, storeData} from '../../utils';

export const dailyScrumAction = (dataRegister, navigation) => dispatch => {
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

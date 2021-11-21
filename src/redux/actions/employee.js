import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, getData, showMessage} from '../../utils';

export const getEmployeeData = () => dispatch => {
  getData('token').then(token => {
    Axios.get(`${API_HOST.uri}/users`, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
        const users = res.data.data;
        dispatch({type: 'GET_EMPLOYEE', value: users});
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(setLoading(false));
        showMessage(`${err?.message}`);
      });
  });
};

import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, getData, showMessage} from '../../utils';

export const getFinanceData = () => dispatch => {
  getData('token').then(token => {
    Axios.get(`${API_HOST.uri}/finance`, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
        const finance = res.data.data;
        dispatch({type: 'GET_FINANCE', value: finance});
        dispatch(setLoading(false));
      })
      .catch(err => {
        dispatch(setLoading(false));
        showMessage(`${err?.message}`);
      });
  });
};

import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, getData, showMessage} from '../../utils';

export const getProjectData = () => dispatch => {
  getData('token').then(token => {
    Axios.get(`${API_HOST.uri}/project`, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
        console.log('get data project', res.data.data);
        const project = res.data.data;
        dispatch({type: 'GET_PROJECT', value: project});
        dispatch(setLoading(false));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(setLoading(false));
        showMessage(`${err?.message}`);
      });
  });
};

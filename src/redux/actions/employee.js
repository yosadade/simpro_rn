import Axios from 'axios';
import moment from 'moment';
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

export const setEmployeeData =
  (
    name,
    email,
    role,
    department,
    noWa,
    password,
    start,
    clockify,
    status,
    noRek,
    nameRek,
    bank,
    paymentType,
    tunjanganAwal,
    contract,
    fee,
    setFormUser,
    setForm,
  ) =>
  dispatch => {
    dispatch(setLoading(true));
    getData('token').then(token => {
      const dataUser = new FormData();
      dataUser.append('name', name);
      dataUser.append('email', email);
      dataUser.append('role', role);
      dataUser.append('department', department);
      dataUser.append('password', password);
      dataUser.append('no_wa', noWa);

      Axios.post(`${API_HOST.uri}/users`, dataUser, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          console.log(res);
          dispatch(setLoading(false));

          const ids = res.data.data.id;
          const dataEmployee = new FormData();
          dataEmployee.append('start', start);
          dataEmployee.append('clockify', clockify);
          dataEmployee.append('status', moment(status).format('l'));
          dataEmployee.append('no_rek', noRek);
          dataEmployee.append('name_rek', nameRek);
          dataEmployee.append('bank', bank);
          dataEmployee.append('payment_type', paymentType);
          dataEmployee.append('tunjangan_awal', tunjanganAwal);
          dataEmployee.append('contract', contract);
          dataEmployee.append('fee', fee);
          dataEmployee.append('userId', ids);

          Axios.post(`${API_HOST.uri}/employee`, dataEmployee, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          })
            .then(ress => {
              dispatch(setLoading(false));
              setFormUser('')
              setForm('')
              showMessage(`${ress?.message}`);
            })
            .catch(errr => {
              console.log('error create employee', errr);
              dispatch(setLoading(false));
              showMessage(`${errr?.message}`);
            });
        })
        .catch(err => {
          console.log('error create user', err);
          dispatch(setLoading(false));
          showMessage(`${err?.message}`);
        });
    });
  };

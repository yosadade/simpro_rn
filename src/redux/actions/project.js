import Axios from 'axios';
import {setLoading} from '.';
import {API_HOST, getData, showMessage} from '../../utils';

export const getProjectData = () => dispatch => {
  getData('token').then(token => {
    Axios.get(`${API_HOST.uri}/project`, {
      headers: {Authorization: `Bearer ${token}`},
    })
      .then(res => {
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

export const setProjectData =
  (
    project,
    status,
    model,
    progress,
    value,
    pm,
    frontend,
    backend,
    mobile,
    designer,
    analisis_design,
    date_analisis_design,
    proposal,
    date_proposal,
    mou,
    date_mou,
    akad_dev,
    date_akad_dev,
    group_client,
    group_developer,
    repayment,
    date_repayment,
    start,
    timeline,
    note,
    daily_scrum,
    portfolio,
    testimoni,
    date_testimoni,
    handover,
    date_handover,
    gitlab,
    gitlab_project_id,
    group_id,
    group_whatsapp,
    groupType,
    setForm,
  ) =>
  dispatch => {
    dispatch(setLoading(true));
    getData('token').then(token => {
      const data = new FormData();
      data.append('project', project);
      data.append('status', status);
      data.append('model', model);
      data.append('progress', progress);
      data.append('value', value);
      data.append('pm', pm);
      data.append('frontend', frontend);
      data.append('backend', backend);
      data.append('mobile', mobile);
      data.append('designer', designer);
      data.append('analisis_design', analisis_design);
      data.append('date_analisis_desain', date_analisis_design);
      data.append('proposal', proposal);
      data.append('date_proposal', date_proposal);
      data.append('mou', mou);
      data.append('date_mou', date_mou);
      data.append('akad_dev', akad_dev);
      data.append('date_akad_dev', date_akad_dev);
      data.append('group_client', group_client);
      data.append('group_developer', group_developer);
      data.append('repayment', repayment);
      data.append('date_repayment', date_repayment);
      data.append('start', start);
      data.append('timeline', timeline);
      data.append('note', note);
      data.append('daily_scrum', daily_scrum);
      data.append('portfolio', portfolio);
      data.append('testimoni', testimoni);
      data.append('date_testimoni', date_testimoni);
      data.append('handover', handover);
      data.append('date_handover', date_handover);
      data.append('gitlab', gitlab);
      data.append('gitlab_project_id', gitlab_project_id);
      data.append('group_id', group_id);
      data.append('group_whatsapp', group_whatsapp);
      data.append('groupType', groupType);
      Axios.post(`${API_HOST.uri}/project`, data, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => {
          console.log('success', res);
          dispatch(setLoading(false));
          setForm('');
          showMessage(`${res?.message}`);
        })
        .catch(err => {
          console.log('error', err);
          showMessage(`${err?.message}`);
        });
    });
  };

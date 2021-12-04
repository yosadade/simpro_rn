import axios from 'axios';
import {getProjectData, setLoading} from '.';
import {API_HOST, getData} from '../../utils';

export const dailyScrumAction =
  (
    item,
    setLoadingId,
    setData,
    setModalSuccess,
    setModalFail,
    modalSuccess,
    modalFail,
    data,
  ) =>
  dispatch => {
    getData('token').then(token => {
      const {
        id,
        gitlab_project_id,
        group_id,
        daily_scrum,
        groupType,
        group_whatsapp,
      } = item;

      setLoadingId(`loading-${id}`);
      dispatch(setLoading(true));

      const dataFormTelegram = {
        projectId: gitlab_project_id,
        groupId: group_id,
      };
      const dataFormWhatsapp = {
        projectId: gitlab_project_id,
        groupId: group_whatsapp,
        keyWoowa: '6f03ddf0ecf0e05dd422cfae215c40259737cbe07e3c8fe1',
      };

      if (groupType === 'Whatsapp') {
        axios
          .post(
            ' https://bot-bee.qodr.or.id/api/v2/projects',
            dataFormWhatsapp,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          .then(res => {
            console.log('terkirim ke whatsapp', res.data);
            const datas = new FormData();
            datas.append('daily_scrum', !daily_scrum);
            axios
              .put(`${API_HOST.uri}/daily-scrum/${id}`, datas, {
                headers: {
                  'content-type': 'multipart/form-data',
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(() => {
                const newData = data.map(item =>
                  item.id === id ? {...item, daily_scrum: !daily_scrum} : item,
                );
                setData(newData);
                setLoadingId(null);
                dispatch(setLoading(false));
                dispatch(getProjectData());
                setModalSuccess(!modalSuccess);
              })
              .catch(() => {
                setLoadingId(null);
                dispatch(setLoading(false));
                setModalFail(!modalFail);
              });
          })
          .catch(() => {
            setLoadingId(null);
            dispatch(setLoading(false));
            setModalFail(!modalFail);
          });
      } else {
        axios.post(
          'https://bot-bee.qodr.or.id/api/projects',
          dataFormTelegram,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        setModalSuccess(!modalSuccess);
        const datas = new FormData();
        datas.append('daily_scrum', !daily_scrum);
        axios
          .put(`${API_HOST.uri}/daily-scrum/${id}`, datas, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            setModalSuccess(!modalSuccess);
            const newData = data.map(item =>
              item.id === id ? {...item, daily_scrum: !daily_scrum} : item,
            );
            setData(newData);
            setLoadingId(null);
            dispatch(setLoading(false));
            dispatch(getProjectData());
          })
          .catch(() => {
            setModalFail(!modalFail);
            setLoadingId(null);
            dispatch(setLoading(false));
          })
          .catch(() => {
            setLoadingId(null);
            dispatch(setLoading(false));
            setModalFail(!modalFail);
          });
      }
    });
  };

import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DocumentPicker from 'react-native-document-picker';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import useForm from '../../utils/userForm';
import {
  CardProject,
  Gap,
  ModalProject,
  Profile,
  SearchBar,
} from '../../components';
import {showMessage} from '../../utils';
import {setProjectData} from '../../redux/actions';

const Project = ({navigation}) => {
  const [form, setForm] = useForm({
    project: '',
    status: 'On Going',
    model: 'Projectly',
    progress: '',
    value: 0,
    pm: 'Rijal',
    frontend: '',
    backend: '',
    mobile: '',
    designer: '',
    analisis_design: '',
    date_analisis_design: Date.now(),
    proposal: '',
    date_proposal: Date.now(),
    mou: '',
    date_mou: '',
    akad_dev: '',
    date_akad_dev: Date.now(),
    group_client: '',
    group_developer: '',
    repayment: '',
    date_repayment: Date.now(),
    start: Date.now(),
    timeline: Date.now(),
    note: '',
    daily_scrum: false,
    portfolio: '',
    testimoni: '',
    date_testimoni: Date.now(),
    handover: '',
    date_handover: Date.now(),
    gitlab: '',
    gitlab_project_id: 0,
    group_id: 0,
    group_whatsapp: null,
    keyWoowa: null,
    groupType: 'Whatsapp',
  });

  const [showDatePickerStart, setShowDatePickerStart] = useState(false);
  const [showDatePickerTimeline, setShowDatePickerTimeline] = useState(false);
  const [fileMouProject, setFileMouProject] = useState('');
  const [fileMouDev, setFileMouDev] = useState('');
  const [fileHandOver, setFileHandOver] = useState('');

  const [modalCreate, setModalCreate] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const {project} = useSelector(state => state.projectReducer);

  const onDatePickerStart = (event, dates) => {
    const currentDate = dates || form.start;
    setShowDatePickerStart(Platform.OS === 'ios');
    setForm('start', new Date(moment(currentDate).format('YYYY-MM-DD')));
  };

  const onDatePickerTimeline = (event, dates) => {
    const currentDate = dates || form.timeline;
    setShowDatePickerTimeline(Platform.OS === 'ios');
    setForm('timeline', new Date(moment(currentDate).format('YYYY-MM-DD')));
  };

  const onSelectFileMouProject = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileMouProject(res[0].name);
      setForm('mou', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSelectFileMouDev = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileMouDev(res[0].name);
      setForm('akad_dev', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSelectFileHandOver = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileHandOver(res[0].name);
      setForm('handover', res[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        showMessage('Canceled from single doc picker');
      } else {
        showMessage('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const onSubmit = () => {
    dispatch(
      setProjectData(
        form.project,
        form.status,
        form.model,
        form.progress,
        form.value,
        form.pm,
        form.frontend,
        form.backend,
        form.mobile,
        form.designer,
        form.analisis_design,
        form.date_analisis_design,
        form.proposal,
        form.date_proposal,
        form.mou,
        form.date_mou,
        form.akad_dev,
        form.date_akad_dev,
        form.group_client,
        form.group_developer,
        form.repayment,
        form.date_repayment,
        form.start,
        form.timeline,
        form.note,
        form.daily_scrum,
        form.portfolio,
        form.testimoni,
        form.date_testimoni,
        form.handover,
        form.date_handover,
        form.gitlab,
        form.gitlab_project_id,
        form.group_id,
        form.group_whatsapp,
        form.keyWoowa,
        form.groupType,
        setForm('reset'),
      ),
    );
  };

  const filterDataProject = project.filter(item => {
    return item.project.indexOf(search) >= 0;
  });

  const onCreate = () => {
    setModalCreate(!modalCreate);
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <Profile />
        <Gap height={24} />
        <SearchBar
          placeholder="Search"
          onSearch={e => setSearch(e)}
          onCreate={onCreate}
        />
      </>
    );
  };

  return (
    <>
      <View style={styles.page}>
        <CardProject
          data={filterDataProject}
          ListHeaderComponent={ListHeaderComponent}
          onPress={() => navigation.navigate('DetailProject')}
        />
        <Gap height={24} />
      </View>
      <ModalProject
        label="Create Project"
        isVisible={modalCreate}
        onBackdropPress={() => setModalCreate(!modalCreate)}
      />
      {showDatePickerStart && (
        <DateTimePicker
          testID="dateTimePicker"
          value={form.start}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDatePickerStart}
        />
      )}
      {showDatePickerTimeline && (
        <DateTimePicker
          testID="dateTimePicker"
          value={form.timeline}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDatePickerTimeline}
        />
      )}
    </>
  );
};

export default Project;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
});

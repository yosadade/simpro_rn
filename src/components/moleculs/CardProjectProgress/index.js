/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts} from '../../../utils';
import {ProgressBar, Gap} from '../../../components';
import {
  ICCheckBig,
  ICCheckRound,
  ICUnCheckBig,
  ICUnCheckRound,
} from '../../../assets';
import {CustomModal} from '../../atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectData, setLoading} from '../../../redux/actions';
import {
  dailyScrumAction,
  unChecklistAction,
} from '../../../redux/actions/dailyScrum';

const colors = ['#ffc107', '#28a745', '#ffaa8a'];
const randColor = colors[Math.floor(Math.random() * colors.length)];

const CardProgressProject = () => {
  const [data, setData] = useState([]);
  const [modalUnChecklist, setModalUnChecklist] = useState(false);
  const [modalSuccesChecklist, setModalSuccessChecklist] = useState(false);
  const [modalFailChecklist, setModalFailChecklist] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalFail, setModalFail] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  const dispatch = useDispatch();
  const {project} = useSelector(state => state.projectReducer);

  useEffect(() => {
    dispatch(getProjectData());
  }, [dispatch]);

  const onDailyScrum = item => {
    dispatch(
      dailyScrumAction(
        item,
        setLoadingId,
        setData,
        setModalSuccess,
        setModalFail,
        modalSuccess,
        data,
      ),
    );
    dispatch(getProjectData());
  };

  const onUnCheclist = item => {
    dispatch(setLoading(true));
    dispatch(
      unChecklistAction(
        item,
        data,
        setData,
        setLoadingId,
        setModalSuccessChecklist,
        modalSuccesChecklist,
        setModalFailChecklist,
        modalFailChecklist,
        setModalUnChecklist,
        modalUnChecklist,
      ),
    );
    dispatch(setLoading(false));
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Project Active</Text>
        {project.map(item => {
          const {id, project, progress, daily_scrum} = item;
          return (
            <View style={styles.card} key={id}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{project}</Text>
                <View style={styles.wrapper}>
                  <Text style={styles.title}>{progress}%</Text>
                  <Gap width={6} />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={
                      daily_scrum
                        ? () => onUnCheclist(item)
                        : () => onDailyScrum(item)
                    }>
                    {loadingId === `loading-${id}` ? (
                      <ActivityIndicator size={13} color="#F19828" />
                    ) : daily_scrum ? (
                      <ICCheckRound />
                    ) : (
                      <ICUnCheckRound />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <Gap height={6} />
              <ProgressBar color="#F19828" progress={`${progress}%`} />
            </View>
          );
        })}
      </View>
      {modalSuccesChecklist && (
        <CustomModal
          type="daily scrum"
          label="Success Uncheck"
          title="Poof! Success Unchecklist!"
          icon={<ICCheckBig />}
          isVisible={modalSuccesChecklist}
          onSubmit={() => setModalSuccessChecklist(!modalSuccesChecklist)}
          onBackdropPress={() => setModalSuccessChecklist(!modalUnChecklist)}
        />
      )}
      {modalFailChecklist && (
        <CustomModal
          type="daily scrum"
          label="Failed Unchecklist"
          title="Poof! check your internet connection!"
          icon={<ICCheckBig />}
          isVisible={modalFailChecklist}
          onSubmit={() => setModalFailChecklist(!setModalFailChecklist)}
          onBackdropPress={() => setModalFailChecklist(!setModalFailChecklist)}
        />
      )}
      {modalSuccess && (
        <CustomModal
          type="daily scrum"
          label="Success!!"
          title="Daily scrum has been sent successfully"
          icon={<ICCheckBig />}
          isVisible={modalSuccess}
          onSubmit={() => setModalSuccess(!modalSuccess)}
          onBackdropPress={() => setModalSuccess(!modalSuccess)}
        />
      )}
      {modalFail && (
        <CustomModal
          type="daily scrum"
          label="Failed!!"
          title="Daily scrum has failed to send"
          icon={<ICUnCheckBig />}
          isVisible={modalFail}
          onSubmit={() => setModalFail(!modalFail)}
          onBackdropPress={() => setModalFail(!modalFail)}
        />
      )}
    </>
  );
};

export default CardProgressProject;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#DEE2E6',
    marginHorizontal: 24,
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  card: {
    marginTop: 24,
    justifyContent: 'flex-start',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  modal: {
    backgroundColor: 'transparent',
    padding: 14,
    margin: 0,
    borderRadius: 4,
  },
  btnModal: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop: 'auto',
  },
});

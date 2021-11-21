/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fonts} from '../../../utils';
import {ProgressBar, Gap} from '../../../components';
import {ICCheckRound, ICUnCheckBig, ICUnCheckRound} from '../../../assets';
import {CustomModal} from '../../atoms';
import {useDispatch, useSelector} from 'react-redux';
import {getProjectData, setLoading} from '../../../redux/actions';

const colors = ['#ffc107', '#28a745', '#ffaa8a'];
const randColor = colors[Math.floor(Math.random() * colors.length)];

const CardProgressProject = () => {
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const {project} = useSelector(state => state.projectReducer);
  const data = project.slice(0, 5);

  useEffect(() => {
    dispatch(getProjectData());
  }, [dispatch]);

  const onDailyScrum = item => {
    dispatch(setLoading(true));
    setModal(!modal);
    setCheck(!check);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Project Active</Text>
        {data.map(item => {
          const {id, project, progress} = item;
          return (
            <View style={styles.card} key={id}>
              <View style={styles.wrapper}>
                <Text style={styles.title}>{project}</Text>
                <View style={styles.wrapper}>
                  <Text style={styles.title}>{progress}%</Text>
                  <Gap width={6} />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => onDailyScrum(item)}
                    disabled={false}>
                    {check ? <ICCheckRound /> : <ICUnCheckRound />}
                  </TouchableOpacity>
                </View>
              </View>
              <Gap height={6} />
              <ProgressBar color="#F19828" progress={`${progress}%`} />
            </View>
          );
        })}
      </View>
      {modal && (
        <CustomModal
          label="Uncheck daily scrum?"
          title="You can only delete this item permanently"
          icon={<ICUnCheckBig />}
          isVisible={modal}
          onBackdropPress={() => setModal(!modal)}
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

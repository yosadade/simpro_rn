/* eslint-disable no-shadow */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import Axios from 'axios';
import 'moment/locale/id';
import {useDispatch} from 'react-redux';
import {ModalProject} from '..';
import {CustomModal, Divider, Gap, ProgressBar} from '../..';
import {
  ICBag,
  ICCLock,
  ICDollar,
  ICEdit,
  ICHourGlass,
  ICStatus,
  ICTrash,
  ICTrashBig,
  ICUnCheckBig,
  ILProfile,
} from '../../../assets';
import {API_HOST, fonts, getData, showMessage} from '../../../utils';
import {getProjectData} from '../../../redux/actions';
import {useNavigation} from '@react-navigation/native';

const CardProject = ({ListHeaderComponent, data}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProjectData());
    setRefreshing(false);
  };

  const onDelete = id => {
    getData('token').then(token => {
      Axios.delete(`${API_HOST.uri}/project/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {
          dispatch(getProjectData());
          setModalDelete(!modalDelete);
          showMessage('Poof! karyawan berhasil dihapus!', 'success');
        })
        .catch(() => {
          setModalDelete(!modalDelete);
          showMessage('Gagal!', 'Anda gagal delete karyawan!', 'warning');
        });
    });
  };

  return (
    <FlatList
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5}
      keyExtractor={item => item.id}
      refreshing={refreshing}
      onRefresh={onRefresh}
      renderItem={item => {
        const {id, project, model, status, progress, value, start, timeline} =
          item.item;

        const todayDate = new Date().toISOString().slice(0, 10);
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(todayDate);
        const secondDate = new Date(timeline);
        const diffDays = Math.round(
          Math.abs((firstDate - secondDate) / oneDay),
        );

        const startDate = new Date(start);
        const endDate = new Date(timeline);
        const totalDays = Math.round(Math.abs((startDate - endDate) / oneDay));
        const diffStartAndToday = Math.round(
          Math.abs((startDate - new Date()) / oneDay),
        );

        const percentage = (diffStartAndToday / totalDays) * 100;

        const whenExpired = endDate.getTime() < new Date().getTime();

        return (
          <>
            <TouchableOpacity
              style={styles.container}
              onPress={() => navigation.navigate('DetailProject', item)}
              key={id}>
              <View style={styles.wrapper}>
                <Text style={styles.label}>{project}</Text>
                <View style={styles.wrapperBtn}>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setModalEdit(!modalEdit)}>
                    <ICEdit />
                  </TouchableOpacity>
                  <Gap width={8} />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => setModalDelete(!modalDelete)}>
                    <ICTrash />
                  </TouchableOpacity>
                </View>
              </View>
              <Gap height={12} />
              <View style={styles.wrapperProfile}>
                <View style={styles.wrapperImage}>
                  <Image source={ILProfile} style={styles.image} />
                </View>
                <View style={styles.wrapperImageSecond}>
                  <Image source={ILProfile} style={styles.image} />
                </View>
              </View>
              <Gap height={12} />
              <View style={styles.wrapper}>
                <View style={styles.wrapper}>
                  <ICDollar />
                  <Gap width={4} />
                  <Text style={styles.title}>IDR {value}</Text>
                </View>
                <View style={styles.wrapper}>
                  <ICBag />
                  <Gap width={4} />
                  <Text style={styles.title}>{model}</Text>
                </View>
              </View>
              <Gap height={12} />
              <View style={styles.wrapper}>
                <View style={styles.wrapper}>
                  <ICStatus />
                  <Gap width={4} />
                  <Text style={styles.title}>{status}</Text>
                </View>
                <View style={styles.wrapper}>
                  <ICHourGlass />
                  <Gap width={4} />
                  <Text style={styles.title}>{progress}%</Text>
                </View>
              </View>
              <Gap height={24} />
              <Divider />
              <Gap height={12} />
              <View style={styles.wrapper}>
                <Text style={styles.label}>Progress</Text>
                <View style={styles.badge}>
                  <ICCLock />
                  <Gap width={4} />
                  <Text style={styles.title}>
                    {whenExpired
                      ? 'Expired'
                      : diffDays >= 31
                      ? `${Math.round(diffDays / 30)} Month Left`
                      : `${diffDays} Days Left`}
                  </Text>
                </View>
              </View>
              <Gap height={12} />
              <ProgressBar color="#F19828" progress={`${progress}%`} />
            </TouchableOpacity>
            {modalDelete && (
              <CustomModal
                label="Delete item Permanently?"
                title="You can only delete this item permanently"
                icon={<ICTrashBig />}
                isVisible={modalDelete}
                onSubmit={() => onDelete(id)}
                onBackdropPress={() => setModalDelete(!modalDelete)}
              />
            )}
            {modalEdit && (
              <ModalProject
                label="Edit Item"
                icon={<ICUnCheckBig />}
                isVisible={modalEdit}
                onBackdropPress={() => setModalEdit(!modalEdit)}
              />
            )}
          </>
        );
      }}
    />
  );
};

export default CardProject;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginTop: 24,
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  wrapperImage: {
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  image: {
    backgroundColor: '#FFFFFF',
    width: 22,
    height: 22,
    borderRadius: 22,
  },
  wrapperProfile: {
    flexDirection: 'row',
  },
  wrapperImageSecond: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    left: 13,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  badge: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#F1C8DB',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

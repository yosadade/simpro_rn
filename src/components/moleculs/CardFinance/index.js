import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ModalDashboard} from '..';
import {CustomModal, Dropdown, Gap} from '../..';
import {ICArrowUp, ICDown, ICEdit, ICTrash, ICTrashBig} from '../../../assets';
import {fonts} from '../../../utils';

const CardFinance = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [detail, setDetail] = useState(false);

  const onDelete = () => {
    setModalDelete(!modalDelete);
  };

  const onEdit = () => {
    setModalEdit(!modalEdit);
  };

  const onDetail = () => {
    setDetail(!detail);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>Finance</Text>
        <View style={styles.wrapper}>
          <View style={styles.wrapperCash}>
            <View style={styles.image} />
            <View>
              <Text style={styles.title}>Cash</Text>
              <Text style={styles.subTitle}>11.000.000</Text>
            </View>
          </View>
          <View style={styles.wrapperBtn}>
            <TouchableOpacity style={styles.btn} onPress={onEdit}>
              <ICEdit />
            </TouchableOpacity>
            <Gap width={8} />
            <TouchableOpacity style={styles.btn} onPress={onDelete}>
              <ICTrash />
            </TouchableOpacity>
            <Gap width={8} />
            <TouchableOpacity style={styles.btnArrow} onPress={onDetail}>
              {detail ? <ICDown /> : <ICArrowUp />}
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={12} />
        {detail && <Dropdown />}
      </View>
      {modalDelete && (
        <CustomModal
          label="Delete item Permanently?"
          title="You can only delete this item permanently"
          icon={<ICTrashBig />}
          isVisible={modalDelete}
          onBackdropPress={() => setModalDelete(!modalDelete)}
        />
      )}
      {modalEdit && (
        <ModalDashboard
          label="Edit Item"
          title="You can only delete this item permanently"
          icon={<ICTrashBig />}
          isVisible={modalEdit}
          onBackdropPress={() => setModalEdit(!modalEdit)}
        />
      )}
    </>
  );
};

export default CardFinance;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginHorizontal: 24,
    borderWidth: 0.5,
    borderColor: '#DEE2E6',
  },
  label: {
    fontSize: 16,
    color: '#212529',
    fontFamily: fonts.primary[700],
  },
  wrapper: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperCash: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#FFE18C',
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: '#212529',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: '#212529',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btn: {
    padding: 6,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
  btnArrow: {
    padding: 1,
    borderColor: '#DEE2E6',
    borderWidth: 0.5,
  },
});

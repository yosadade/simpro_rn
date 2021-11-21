import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NumberFormat from 'react-number-format';
import {ModalDashboard} from '..';
import {CustomModal, Dropdown, Gap} from '../..';
import {ICArrowUp, ICDown, ICEdit, ICTrash, ICTrashBig} from '../../../assets';
import {fonts} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {getFinanceData} from '../../../redux/actions';

const CardFinance = () => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [detail, setDetail] = useState(false);

  const dispatch = useDispatch();
  const {finance} = useSelector(state => state.financeReducer);

  useEffect(() => {
    dispatch(getFinanceData());
  }, [dispatch]);

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
        {finance.map(item => {
          const {id, akun, value} = item;
          return (
            <View key={id}>
              <View style={styles.wrapper} >
                <View style={styles.wrapperCash}>
                  <View style={styles.image} />
                  <View>
                    <Text style={styles.title}>{akun}</Text>
                    <NumberFormat
                      value={value}
                      className="foo"
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'IDR '}
                      renderText={values => (
                        <Text style={styles.subTitle}>{values}</Text>
                      )}
                    />
                  </View>
                </View>
                <View style={styles.wrapperBtn}>
                  <TouchableOpacity style={styles.btn} onPress={onEdit}>
                    <ICEdit />
                  </TouchableOpacity>
                  {akun === 'Piutang' || akun === 'Est. Income' ? (
                    <>
                      <Gap width={8} />
                      <TouchableOpacity style={styles.btn} onPress={onDelete}>
                        <ICTrash />
                      </TouchableOpacity>
                      <Gap width={8} />
                      <TouchableOpacity
                        style={styles.btnArrow}
                        onPress={onDetail}>
                        {detail ? <ICDown /> : <ICArrowUp />}
                      </TouchableOpacity>
                    </>
                  ) : null}
                </View>
              </View>
              <Gap height={12} />
              {detail && (
                <>
                  <Gap height={12} />
                  <Dropdown />
                </>
              )}
            </View>
          );
        })}
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

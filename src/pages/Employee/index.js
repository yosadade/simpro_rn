import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CardEmployee, Gap, Profile, SearchBar} from '../../components';
import {getEmployeeData} from '../../redux/actions';

const Employee = ({navigation}) => {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const {employee} = useSelector(state => state.employeeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeeData());
  }, [dispatch]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getEmployeeData());
    setRefreshing(false);
  };

  const ListHeaderComponent = () => {
    return (
      <>
        <Profile />
        <Gap height={24} />
        <SearchBar placeholder="Search" />
        <Gap height={24} />
      </>
    );
  };

  return (
    <View style={styles.page}>
      <FlatList
        data={employee}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={item => {
          console.log(item.item)
          const {id, name, email, role, department, no_wa} = item.item;
          const {start, status} = item.item.employee;
          return (
            <CardEmployee
              id={id}
              name={name}
              email={email}
              role={role}
              department={department}
              status={status}
              noWa={no_wa}
              start={start}
              onPress={() => navigation.navigate('DetailEmployee', item)}
            />
          );
        }}
      />
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F9FBFD',
  },
});

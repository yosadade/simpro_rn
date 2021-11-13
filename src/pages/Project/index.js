import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  CardProject,
  Gap,
  ModalProject,
  Profile,
  SearchBar,
} from '../../components';
import {getProjectData, setLoading} from '../../redux/actions';

const Project = ({navigation}) => {
  const [modalCreate, setModalCreate] = useState(false);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const {project} = useSelector(state => state.projectReducer);

  const filterDataProject = project.filter(item => {
    return item.project.indexOf(search) >= 0;
  });

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getProjectData());
    setRefreshing(false);
  };

  const onCreate = () => {
    setModalCreate(!modalCreate);
  };

  const sliceDataProject = project.slice(0, 9);

  if (project.length <= 5) {
    return dispatch(setLoading(true));
  }

  return (
    <>
      <View style={styles.page}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <Profile />
          <Gap height={24} />
          <SearchBar
            placeholder="Search"
            onSearch={value => setSearch(value)}
            onCreate={onCreate}
          />
          {project.length <= 10 ? (
            <CardProject
              data={sliceDataProject}
              onPress={() => navigation.navigate('DetailProject')}
            />
          ) : (
            <CardProject
              data={filterDataProject}
              onPress={() => navigation.navigate('DetailProject')}
            />
          )}
          <Gap height={24} />
        </ScrollView>
      </View>
      <ModalProject
        label="Create Project"
        isVisible={modalCreate}
        onBackdropPress={() => setModalCreate(!modalCreate)}
      />
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

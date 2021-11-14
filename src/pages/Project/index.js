import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  CardProject,
  Gap,
  ModalProject,
  Profile,
  SearchBar,
} from '../../components';
import {getProjectData} from '../../redux/actions';

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

  const ListHeaderComponent = () => {
    return (
      <>
        <Profile />
        <Gap height={24} />
        <SearchBar
          placeholder="Search"
          onSearch={value => setSearch(value)}
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

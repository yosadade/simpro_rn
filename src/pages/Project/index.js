import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  CardProject,
  Gap,
  ModalProject,
  Profile,
  SearchBar,
} from '../../components';

const Project = ({navigation}) => {
  const [modalCreate, setModalCreate] = useState(false);
  const [search, setSearch] = useState('');

  const {project} = useSelector(state => state.projectReducer);

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

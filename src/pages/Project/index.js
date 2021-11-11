import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  CardProject,
  Gap,
  ModalProject,
  Profile,
  SearchBar,
} from '../../components';

const Project = ({navigation}) => {
  const [modalCreate, setModalCreate] = useState(false);

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Profile />
          <Gap height={24} />
          <SearchBar
            placeholder="Search"
            onPress={() => setModalCreate(!modalCreate)}
          />
          <CardProject onPress={() => navigation.navigate('DetailProject')} />
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

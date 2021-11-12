import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICArrowUp} from '../../../assets';
import {fonts} from '../../../utils';
import {useSelector} from 'react-redux';

const CardDeveloper = () => {
  const [viewDev, setViewDev] = useState(null);
  const [projectly, setProjectly] = useState(0);
  const [devSharing, setDevSharing] = useState(0);
  const [taskly, setTaskly] = useState(0);
  const [startUp, setStartUp] = useState(0);

  const {project} = useSelector(state => state.projectReducer);

  const dataDeveloper = [
    {
      id: 1,
      keterangan: 'Projectly',
      jml: projectly.length,
      desc: projectly,
    },
    {
      id: 2,
      keterangan: 'Dev Sharing',
      jml: devSharing.length,
      desc: devSharing,
    },
    {
      id: 3,
      keterangan: 'Taskly',
      jml: taskly.length,
      desc: taskly,
    },
    {
      id: 4,
      keterangan: 'Start Up',
      jml: startUp.length,
      desc: startUp,
    },
  ];

  useEffect(() => {
    const filteredProjectly = project.filter(
      data => data.model === 'Projectly',
    );
    const filterDevSharing = project.filter(
      data => data.model === 'Dev Sharing',
    );
    const filteredTaskly = project.filter(data => data.model === 'Taskly');
    const filteredStartUp = project.filter(data => data.model === 'Start Up');

    setProjectly(filteredProjectly);
    setDevSharing(filterDevSharing);
    setTaskly(filteredTaskly);
    setStartUp(filteredStartUp);
  }, [project]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Developer</Text>
      {dataDeveloper.map(item => {
        const {id, keterangan, jml} = item;
        return (
          <View style={styles.wrapper} key={id}>
            <View style={styles.wrapperCash}>
              <View style={styles.image} />
              <View>
                <Text style={styles.title}>{keterangan}</Text>
                <Text style={styles.subTitle}>{jml}</Text>
              </View>
            </View>
            <View style={styles.wrapperBtn}>
              <TouchableOpacity style={styles.btnArrow}>
                <ICArrowUp />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CardDeveloper;

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

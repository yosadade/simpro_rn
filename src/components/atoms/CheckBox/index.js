import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ICCheck, ICUnCheck} from '../../../assets';

const CheckBox = () => {
  const [check, setCheck] = useState(false);

  return (
    <TouchableOpacity onPress={() => setCheck(!check)}>
      <Image source={check ? ICCheck : ICUnCheck} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    backgroundColor: '#FFFFFF',
    top: 3,
  },
});

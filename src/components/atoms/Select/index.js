import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {fonts} from '../../../utils';

const Select = ({data, value, onSelectChange}) => {
  return (
    <View>
      <View style={styles.input}>
        <Picker
          itemStyle={styles.picker}
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          {data.map(item => {
            // eslint-disable-next-line no-shadow
            const {id, label, value} = item;
            return (
              <Picker.Item
                fontFamily={fonts.primary[700]}
                key={id}
                label={label}
                value={value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    paddingHorizontal: 6,
    marginTop: 8,
    borderWidth: 0,
    textAlignVertical: 'center',
    fontFamily: fonts.primary[300],
    color: '#9A9B9D',
  },
  picker: {
    fontFamily: fonts.primary[300],
    color: '#212529',
  },
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import {showMessage} from '..';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    showMessage(`${e}, Failed to save data in localstorage`);
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    showMessage(`${e}, Failed to save data in localstorage`);
  }
};

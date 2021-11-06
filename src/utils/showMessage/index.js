import {showMessage as showToast} from 'react-native-flash-message';
import {fonts} from '..';

export const showMessage = (message, type) => {
  showToast({
    message: message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1ABC9C' : '#F8D7DA',
    titleStyle: {
      color: '#842029',
      fontFamily: fonts.primary[400],
      fontSize: 14,
    },
  });
};

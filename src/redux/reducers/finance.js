const initialStateFinance = {
  finance: [],
};

export const financeReducer = (state = initialStateFinance, action) => {
  if (action.type === 'GET_FINANCE') {
    return {
      ...state,
      finance: action.value,
    };
  }
  return state;
};

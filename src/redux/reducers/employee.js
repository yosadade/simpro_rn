const initialStateEmployee = {
  employee: [],
};

export const employeeReducer = (state = initialStateEmployee, action) => {
  if (action.type === 'GET_EMPLOYEE') {
    return {
      ...state,
      employee: action.value,
    };
  }
  return state;
};

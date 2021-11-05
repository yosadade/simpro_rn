const initialStateRegister = {
  name: '',
  email: '',
  role: '',
  department: '',
  password: '',
  no_wa: '',
};

export const registerReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      role: action.value.role,
      department: action.value.department,
      password: action.value.password,
      no_wa: action.value.no_wa,
    };
  }
  return state;
};

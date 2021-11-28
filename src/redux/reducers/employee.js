const initialStateEmployee = {
  employee: [],
  start: '01-o1-2001',
  clockify: '',
  status: 1,
  no_rek: '',
  name_rek: '',
  bank: '',
  payment_type: 'Monthly',
  tunjangan_awal: '',
  contract: '',
  fee: '',
  userId: '',
};

export const employeeReducer = (state = initialStateEmployee, action) => {
  if (action.type === 'GET_EMPLOYEE') {
    return {
      ...state,
      employee: action.value,
    };
  }
  if (action.type === 'SET_EMPLOYEE') {
    return {
      ...state,
      start: action.value.start,
      clockify: action.value.clockify,
      status: action.value.status,
      no_rek: action.value.no_rek,
      name_rek: action.value.name_rek,
      bank: action.value.bank,
      payment_type: action.value.payment_type,
      tunjangan_awal: action.value.tunjangan_awal,
      contract: action.value.contract,
      fee: action.value.fee,
      userId: action.value.userId,
    };
  }
  return state;
};

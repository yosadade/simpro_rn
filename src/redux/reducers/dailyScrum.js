const initialStateDailyScrum = {
  id: '',
  gitlab_project_id: '',
  group_id: '',
  daily_Scrum: '',
  groupType: '',
  group_whatsapp: '',
};

export const dailyScrumReducer = (state = initialStateDailyScrum, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      id: action.value.id,
      gitlab_project_id: action.value.gitlab_project_id,
      group_id: action.value.group_id,
      daily_Scrum: action.value.daily_Scrum,
      groupType: action.value.groupType,
      group_whatsapp: action.value.group_whatsapp,
    };
  }
  return state;
};

const initialStateProject = {
  project: [],
};

export const projectReducer = (state = initialStateProject, action) => {
  if (action.type === 'GET_PROJECT') {
    return {
      ...state,
      project: action.value,
    };
  }
  if (action.type === 'SET_PROJECT') {
    return {
      ...state,
      project: action.value.project,
      status: action.value.status,
      model: action.value.model,
      progress: action.value.progress,
      value: action.value.value,
      pm: action.value.pm,
      frontend: action.value.frontend,
      backend: action.value.backend,
      mobile: action.value.mobile,
      designer: action.value.designer,
      analisis_design: action.value.analisis_design,
      date_analisis_design: action.value.date_analisis_design,
      proposal: action.value.proposal,
      date_proposal: action.value.date_proposal,
      mou: action.value.mou,
      date_mou: action.value.date_mou,
      akad_dev: action.value.akad_dev,
      date_akad_dev: action.value.date_akad_dev,
      group_client: action.value.group_client,
      group_developer: action.value.group_client,
      repayment: action.value.repayment,
      date_repayment: action.value.date_repayment,
      start: action.value.start,
      timeline: action.value.timeline,
      note: action.value.note,
      daily_scrum: action.value.daily_scrum,
      portfolio: action.value.portfolio,
      testimoni: action.value.testimoni,
      date_testimoni: action.value.date_testimoni,
      handover: action.value.handover,
      date_handover: action.value.date_handover,
      gitlab: action.value.gitlab,
      gitlab_project_id: action.value.gitlab_project_id,
      group_id: action.value.group_id,
      group_whatsapp: action.value.group_whatsapp,
      keyWoowa: action.value.keyWoowa,
      groupType: action.value.groupType,
      scheduler: action.value.scheduler,
      scheduler_hour: action.value.scheduler_hour,
    };
  }
  return state;
};

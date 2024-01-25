// Definisco tre costanti di azioni:
export const SET_JOBS = 'SET_JOBS';
export const SET_COMPANY_JOBS = 'SET_COMPANY_JOBS';
export const SET_QUERY = 'SET_QUERY';
// SET_JOBS, SET_COMPANY_JOBS e SET_QUERY sono i tipi di azioni che l'applicazione può dispacciare
// E' bene scegliere di utilizzare costanti anziché stringhe dirette per evitare errori tipografici

// Le actions sono poi utilizzate per generare azioni che possono essere dispacciate allo store quando qualcosa cambia nell'applicazione
// Ad esempio, 'setJobs', 'setCompanyJobs', e 'setQuery' possono essere "chiamati" e le azioni relative ad essi possono essere passate allo store per aggiornare lo stato dell'app
export const setJobs = (newJob) => ({
  type: SET_JOBS,
  payload: newJob,
});

export const setCompanyJobs = (jobsList) => ({
  type: SET_COMPANY_JOBS,
  payload: jobsList,
});

export const setQuery = (newQuery) => ({
  type: SET_QUERY,
  payload: newQuery,
});

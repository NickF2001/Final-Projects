// Importo le costanti delle azioni dal file actions
import { SET_JOBS, SET_COMPANY_JOBS, SET_QUERY } from '../actions/actions';

// Inizializza lo stato iniziale dell'applicazione
// Questo stato ha tre proprietà:
const initialState = {
  jobs: [], // jobs (un array di lavori),
  companyJobs: [], // companyJobs (un array di aziende relative agli impieghi)
  query: '', // e query (una stringa rappresentante la query di ricerca)
};


// Messaggio per il prof Ivan:
// Premetto che so che le actions devono contenere la minima quantità di informazione possibile,
// ma dato che per l'app del meteo le ho richiesto molto supporto, ho voluto provare a cimentarmi con redux e sperimentare diverse possibilità,
// magari meno funzionali, per farle capire (e per mettermi alla prova) che riesco ad essere un po' autonoma
// Non mi interessa che la valutazione finale sarà più bassa rispetto a quella degli altri, mi interessa capire in modo da poter essere flessibile e autonoma quando lavoro

const rootReducer = (state = initialState, action) => {
  // Questa è la funzione reducer principale che gestisce le azioni inviate allo store Redux.
  //La funzione riceve due argomenti: 'state' rappresentante lo stato attuale dell'applicazione e 'action' rappresentante l'azione dispacciata.

  // Nel caso in cui l'azione abbia il tipo SET_JOBS, il reducer restituisce un nuovo stato con l'array jobs aggiornato con i dati presenti nell'azione (action.payload)
  // Nel caso di SET_COMPANY_JOBS, viene aggiornato l'array companyJobs con i dati presenti nell'azione
  // Nel caso di SET_QUERY, viene aggiornata la stringa query
  // Se l'azione non corrisponde a nessun caso, viene restituito lo stato senza modifiche

  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case SET_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;

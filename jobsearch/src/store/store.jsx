// Importo la funzione 'configureStore' dal toolkit di Redux, che mi fornisce uno strumento più 'moderno' per sviluppare applicazioni con Redux
// Esso va a semplificare molti aspetti della configurazione e della gestione dello stato
import { configureStore } from '@reduxjs/toolkit';

// importo il mio reducer creato precedentemente
import reducer from '../reducers/reducers';

const store = configureStore({ // cofiguro lo store
  reducer, //e passo il reducer principale al parametro 'reducer' all'interno dell'oggetto. Questo crea uno store Redux con il reducer specificato
});

export default store; // Infine, esporto lo store in modo da poterlo utilizzare in altri moduli dell'applicazione
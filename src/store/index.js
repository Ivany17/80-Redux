import reducer from 'reducers';
import {createStore} from 'redux'; // Я смотрю видео-урок за 14 декабря 2021 года, и там createStore ещё работает


   
  const store = createStore(reducer);
  export default store;
// import React from 'react';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './store/store';


// import { createRoot } from 'react-dom';

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// reportWebVitals();

// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
// import store from './store/store';

import { createStore } from 'redux';
import rootReducer from './reducer/cartReducer';


const store = createStore(rootReducer);


const root = createRoot(document.getElementById('root'));

root.render(

  <Provider store={store}>
      <App />
  </Provider>
);

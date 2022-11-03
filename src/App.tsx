import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import 'devextreme/dist/css/dx.light.css';

import store from './store';
// import { NotificationProvider } from 'context/notification';

const App: React.FC = () => (
  <Provider store={store}>

    <Router />

  </Provider>
);

export default App;

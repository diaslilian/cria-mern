import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes/index';
import history from './services/history';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { createStore } from 'redux';
import reducer from './reducers/game-control-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
//test state from store
store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';

export default function App() {
  return (
    <Provider store={store}>
      <p>App!</p>
    </Provider>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import configureStore from "./lib/state/store";
import FormProvider from './lib/hooks/useFormValidation';

const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FormProvider>
      <App />
    </FormProvider>
  </Provider>,
);
reportWebVitals();
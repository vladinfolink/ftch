import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

import './assets/styles/reset.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root") as HTMLElement);
registerServiceWorker();

if (!!(module as any).hot) {
  (module as any).hot.accept();
}

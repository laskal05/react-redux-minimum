import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const Main = (): React.ReactElement => (
  <div>
    <h1>H1 Hello</h1>
  </div>
);

const Routes = (): React.ReactElement => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

ReactDOM.render(
  <Provider store={createStore(combineReducers({}))}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

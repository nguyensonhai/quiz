import React, { Fragment, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "views/Loading/Loading.js";
//Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "redux/reducers";

const store = createStore(
  RootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Welcome = React.lazy(() => import("views/Welcome/Welcome.js"));
const Error404 = React.lazy(() => import("views/Error/Error404.js"));
const Play = React.lazy(() => import("views/Play/Play.js"));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense
        fallback={
          <Fragment>
            <Loading />
          </Fragment>
        }
      >
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/play" exact component={Play} />
          <Route path="*" component={Error404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

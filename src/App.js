import React from "react";
import './styles/global.scss';
import {Provider} from "./context/context";
import {AppUi} from "./containers/AppUi";

const App = () => {
  return (
      <Provider>
          <AppUi />
      </Provider>
  );
}

export {App};

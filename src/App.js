import React from "react";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div>
      {/* <div className='app'></div> */}
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./style/App.css";

import { Header } from "./components/common";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;

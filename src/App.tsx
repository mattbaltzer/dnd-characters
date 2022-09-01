import React from "react";
import Logo from "./assests/updatedlogo.png";
//import "./App.css";
import Layout from "./layout";

function App() {
  return (
    <Layout>
      <div>
        <header>
          <img
            src={Logo}
            className="App-logo"
            alt="logo"
            height={200}
            width={275}
          />
          <h1>Basic Character Selector</h1>
        </header>
        <section></section>
      </div>
    </Layout>
  );
}

export default App;

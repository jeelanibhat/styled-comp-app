import React from "react";
import Button from "./Button";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="app__container">
      <h2 className="text-3xl font-bold text-center py-4 my-3">
        Styled Component
      </h2>
      <div className="button_wrap flex flex-col">
        <Button primary>Primary</Button>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
        <Button success>Success</Button>
      </div>

      <div className="page__wrap shadow-2xl	p-5 container mx-auto drop-shadow">
        <h2 className="text-3xl text-center py-4 my-3">
          Buttons coming from Pages
        </h2>
        <Home />
        <About />
      </div>
    </div>
  );
};

export default App;

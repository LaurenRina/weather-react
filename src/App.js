import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Search />
      </div>
      <p class="text-center link-git">
        <i class="fa-brands fa-github content-icon"></i>
        <a
          href="https://github.com/LaurenRina/weather-react"
          target="blank"
          class="contact-link"
          title="GitHub"
        >
          LaurenRina
        </a>
      </p>
    </div>
  );
}

export default App;

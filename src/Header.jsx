import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div class="Header">
      <div>
        <button>EN</button>
        <button>HE</button>
        <button>AR</button>
      </div>
      <div class="continents">
        <button>Africa</button>
        <button>Europe</button>
        <button>South America</button>
        <button>North America</button>
        <button>Asia</button>
        <button>Oceana</button>
      </div>
      <div>
        <h3>Logo</h3>
      </div>
    </div>
  );
}

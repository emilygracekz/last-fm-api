import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/artist/diplo">Diplo</Link>
      </li>
    </ul>
  );
};

export default Navigation;

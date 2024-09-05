// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
// import React from "react";
//import React, { PureComponent } from 'react'
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About" />
    </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};

// Navbar.defaultProps = {
//   title: "Asshole Learn About Props",
//   abouttext: "Learn about default props",
// };

import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import PropTypes from "prop-types";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtils" abouttext="About" />
      <div className="container my-5">
        <TextForm heading="Enter The Text To Analyse" />
      </div>
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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInterestsWrapper from "./components/PersonalInterests/PersonalInterestsWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route
            path="/personal-interests"
            element={<PersonalInterestsWrapper />}
          />
          <Route path="/work-sample" element={WorkSample} />
          <Route path="/Github" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// TODO: refector out
function WorkSample() {
  return (
    <div>
      <iframe
        // src="/work-sample/index.html"
        src="http://localhost:3001"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Work Sample"
      ></iframe>
    </div>
  );
}

export default App;

import SignaturePad from "./Components/Signature/Signature";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Navbarr from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbarr></Navbarr>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signature" element={<SignaturePad />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

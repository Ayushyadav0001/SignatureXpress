import SignaturePad from "./Components/Signature/Signature";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/LandingPage/Landing";
import Navbarr from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <HashRouter>
        <Navbarr></Navbarr>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signature" element={<SignaturePad />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

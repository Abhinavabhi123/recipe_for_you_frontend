import "./App.css";
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import Client from "./Routes/Client";
// import Navbar from "./Components/Navbar/Navbar";
// import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <>
    <Router>
     <Routes>
       <Route path="/*" element={<Client/>}/>
     </Routes>
    </Router>
   </>
  );
}

export default App;

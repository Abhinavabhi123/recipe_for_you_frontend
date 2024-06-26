import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Client from "./Routes/Client";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("message", message => {
      alert(message.data) 
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Client />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

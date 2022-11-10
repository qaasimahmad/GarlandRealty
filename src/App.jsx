import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { EmailConfirmation, Landing, Rental, Sales } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/sales" element={<Sales />} />
        <Route exact path="/rental" element={<Rental />} />
        <Route exact path="verify-email/:id" element={<EmailConfirmation/>} />
        <Route exact path="*" element={<Navigate to='/'/>} />
      </Routes>
    </div>
  );
};

export default App;

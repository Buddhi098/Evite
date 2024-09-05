import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Index";
import Login from "./login/Login";
import Event from "./event/Index";
import Dashboard from "./dashboard/Index";
import CreateEventForm from "./create_event/Index";
import RegForm from "./register/RegForm";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoutes";
import AllEvents from "./all_event_page/AllEvents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<RegForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/event_form" element={<CreateEventForm />} />
            <Route path="/events" element={<AllEvents />} />
            <Route
              path="/dashboard"
              element={<ProtectedRoute><Dashboard/></ProtectedRoute>}
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

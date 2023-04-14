import { useState, useEffect } from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";

import { getStudents } from "./utils/student";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="nav-container">
          <div className="nav-header">Links</div>
          <div className="navlink-container">
            <NavLink className="nav-link" to="/">
              Home Page
            </NavLink>
            <NavLink className="nav-link" to="/students">
              Students Page
            </NavLink>
            <NavLink className="nav-link" to="/courses">
              Courses Page
            </NavLink>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/courses" element={<CoursesPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

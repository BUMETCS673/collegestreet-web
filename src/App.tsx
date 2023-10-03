import React from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";

import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
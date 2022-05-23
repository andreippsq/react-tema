import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

//for git page in package.json
//"homepage": "https://andreippsq.github.io/react-tema",

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = { user: "" };
  let location = useLocation();
  if (auth.user === "") {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:articleId" element={<Details />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;

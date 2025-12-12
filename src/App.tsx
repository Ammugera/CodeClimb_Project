import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Solver from "./pages/Solver";
import Creator from "./pages/Creator";
import Profile from "./pages/Profile";
import ChallengeDemo from "./pages/ChallengeDemo";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/solve/:id" element={<Solver />} />
          <Route path="/create" element={<Creator />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/challenge-demo" element={<ChallengeDemo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;

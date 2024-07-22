import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersList from "./components/User/UsersList";
import UserDetail from "./components/User/UserDetail";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { users } = useUsers();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList users={users} />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

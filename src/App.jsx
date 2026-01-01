// src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/home/home.jsx";
import LoginPage from "./component/log/signin.jsx";
import SignupPage from "./component/log/signup.jsx";
import User from "./component/user/User.jsx"; // user page after login/signup

// Optional layout wrapper for Home
function HomeLayout() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<HomeLayout />} />

      {/* Authentication pages */}
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* User page (after login/signup) */}
      <Route path="/user" element={<User />} />
    </Routes>
  );
}

export default App;


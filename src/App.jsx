import Header from "./component/layout/Header";
import Login from "./component/pages/Login"
import SignUp from "./component/pages/SignUp"
import Profile from "./component/pages/Profile"
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
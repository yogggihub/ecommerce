import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component'
import Home from "./routes/home.component";
import SignIn from './sign-in/sign-in-component'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path="login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

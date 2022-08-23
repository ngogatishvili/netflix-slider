import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import { Player } from "./pages/Player";
import Signup from "./pages/Signup";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Netflix/>}/>
      <Route path="/player" element={<Player/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;

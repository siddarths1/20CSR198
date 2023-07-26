import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './resources/components/Home';
import Train from './resources/components/Train';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/train" element={<Train/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

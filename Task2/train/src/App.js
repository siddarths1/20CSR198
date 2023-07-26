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

// {
//   "companyName": "Train",
//   "clientID": "676d7987-3864-437e-9ef0-d2e7920fa98d",
//   "clientSecret": "DosQwekMuIpfDbtm",
//   "ownerName": "siddarths",
//   "ownerEmail": "siddarths.20cse@kongu.edu",
//   "rollNo": "20CSR198"
// }
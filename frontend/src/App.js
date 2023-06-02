import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{Suspense,useState} from "react";
import Loader from "./Loader";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Regclg from "./pages/Regclg";

function App() {
  const [loader, setloader] = useState(false);
  return (
    <> 
      <Router>
      <Suspense>
      <Loader  loader={loader}/>
      <Routes>
        <Route path ='/reg' element={<Register setloader={setloader}/>}/>
        <Route path ='/' element={<Home setloader={setloader}/>}/>
        <Route path ='/college_registration' element={<Regclg setloader={setloader}/>}/>
      </Routes>
      </Suspense>
    </Router>
 

    </>
  );
}

export default App;

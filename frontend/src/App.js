import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React,{Suspense,useState} from "react";
import Loader from "./Loader";
// import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  const [loader, setloader] = useState(false);
  return (
    <> 
      <Router>
      <Suspense>
      <Loader  loader={loader}/>
      <Routes>
        {/* <Route path ='/' element={<Register setloader={setloader}/>}/> */}
        <Route path ='/' element={<Home setloader={setloader}/>}/>
        {/* <Route path ='/admin' element={<Admin setloader={setloader}/>}/>
        <Route path ='/admin-login' element={<Admin_login setloader={setloader}/>}/>
        <Route path ='/college_registration' element={<Regclg setloader={setloader}/>}/>
        <Route path ='/build_team' element={<Buildteam setloader={setloader}/>}/> */}
      </Routes>
      </Suspense>
    </Router>
 

    </>
  );
}

export default App;

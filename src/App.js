import './App.css';
import Addres from './Components/AddNewResources';
import Addcollection from './Components/createcomp';
import Addnew from './Components/AddNewCollection';
import AddResources from './Components/resource';
import {

  Routes,
  Route
  } from "react-router-dom";
  
function App() {
  return (
    <div className='App'>


  
		<Routes> 
          <Route path="/AddResources" element={<AddResources/>} /> 
            <Route path="/AddNewCollection" element={<Addnew/>} />
            <Route path="/AddNewResources" element={<Addres/>} />
            <Route path="/AddCollection" element={<Addcollection/>} />
        
		 </Routes> 

    </div>
      
  
  );
}

export default App;

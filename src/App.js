import './App.css';
import Addcollection from './Components/AddCollection/addCollection';
import AddNewCollection from './Components/AddNewCollection/AddNewCollection';
import AddResources from './Components/AddResources/AddResources';
import AddNewResources from './Components/AddNewResources/AddNewResources';
import Resource  from './Components/Resources/resource';
import MyResource from './Components/MyResources/myResources';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/AddResources" element={<AddResources />} />
        <Route path="/AddNewCollection" element={<AddNewCollection />} />
        <Route path="/AddNewResources" element={<AddNewResources />} />
        <Route path="/AddCollection" element={<Addcollection />} />
        <Route path="/Resources" element={<Resource/>}/>
        <Route path="/MyResources" element={<MyResource/>}/>
      </Routes>

    </div>


  );
}

export default App;

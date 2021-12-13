 import './App.css';
 import { BrowserRouter as Router } from "react-router-dom";
import Programar from './Pages/Programar';
import Header from './Components/Header';
import Rutas from './Routes';
function App() {
  
  return (

   
    <Router>
       <Header />
      <Rutas/>
    </Router>
 
  );
}

export default App;

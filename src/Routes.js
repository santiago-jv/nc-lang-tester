import { Switch, Route } from "react-router-dom";
import Programar from "./Pages/Programar";
import Instrucciones from "./Pages/Instrucciones";
import Acercade from "./Pages/Acercade";
const Rutas=()=>{
    return(
        <Switch>
            <Route exact path="/" component={Programar} />
            <Route path="/Instrucciones" component={Instrucciones} />
            <Route path="/Acerdade" component={Acercade} />
      
          
        </Switch>
    );

};
export default Rutas;
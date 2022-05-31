import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicines from "./Container/Medicines/Medicines";


function App() {
  return (
   <>
   
   <Layout>
      <Switch>
          <Route exact path={'/doctor'} component={Doctor}/>
          <Route exact path={'/medicines'} component={Medicines}/>

      </Switch>


   </Layout>
   
   
   
   </>
  );
}

export default App;

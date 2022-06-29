import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicines from "./Container/Medicines/Medicines";
import {Provider} from "react-redux";
import Counter from "./Container/Counter/Counter";
import { counterStore } from "./Redux/Store";


function App() {

  let store = counterStore()


  return (
    <>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={'/doctor'} component={Doctor} />
            <Route exact path={'/medicines'} component={Medicines} />
            <Route exact path={'/counter'} component={Counter} />

          </Switch>


        </Layout>

      </Provider>



    </>
  );
}

export default App;

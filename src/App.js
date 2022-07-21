import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Container/Doctor/Doctor";
import Medicines from "./Container/Medicines/Medicines";
import {Provider} from "react-redux";
import Counter from "./Container/Counter/Counter";
import { counterStore } from "./Redux/Store";
import { PersistGate } from 'redux-persist/integration/react'
import PromisesExample from "./Container/PromisesExample/PromisesExample";
import UseMemo from "./Container/UseMemo/UseMemo";



function App() {

  let {store, persistor} = counterStore()


  return (
    <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Switch>
            <Route exact path={'/doctor'} component={Doctor} />
            <Route exact path={'/medicines'} component={Medicines} />
            <Route exact path={'/counter'} component={Counter} />
            <Route exact path={'/promises_example'} component={PromisesExample} />
            <Route exact path={'/usememo_example'} component={UseMemo} />

          </Switch>


        </Layout>
        </PersistGate> 

      </Provider>



    </>
  );
}

export default App;

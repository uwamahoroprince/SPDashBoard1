import "./App.css";
import { SideBar } from "./components/sideBar";
import { TopBar } from "./components/topbar";
import { Card } from "./components/card";
import { PetrolStation } from "./pages/petrolStation/newPetrolStation";
import Service from "./pages/service/service";
import AllStations from "./pages/petrolStation/allStations";
import Payments from "./pages/payments/payment";
import FuelPayment from "./pages/fuelPayment/fuelPayment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div id="wrapper">
        <Router>
          <SideBar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <TopBar />

              <Switch>
                <Route exact path="/">
                  <Card />
                </Route>
                <Route path="/newPetrolStation">
                  <PetrolStation />
                </Route>
                <Route path="/service">
                  <Service />
                </Route>
                <Route path="/allStation">
                  <AllStations />
                </Route>
                <Route path="/servicePayment">
                  <Payments />
                </Route>
                <Route path="/fuelPayment">
                  <FuelPayment />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

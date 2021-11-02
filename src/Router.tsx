import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import StationCalculator from "./components/StationCalculator";
import Test from "./components/Test";

export type RouterHeader = {
  header?: React.ReactNode;
};

const Router: React.FC<RouterHeader> = ({ header }) => {
  return (
    <HashRouter>
      {header}
      <Switch>
        <Route exact path="/station" render={() => <StationCalculator />} />
        <Route exact path="/test" render={() => <Test />} />
        <Route render={() => <Redirect to="/station" />} />
      </Switch>
    </HashRouter>
  );
};

export default Router;

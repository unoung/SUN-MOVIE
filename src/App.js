import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./routes/Detail/Detail";
import { Home } from "./routes/Home/Home";
import { GlobalStyles } from "./Globalstyle";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

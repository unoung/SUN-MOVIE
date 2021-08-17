import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Detail } from "./routes/Detail/Detail";
import { Home } from "./routes/Home/Home";
import { GlobalStyles } from "./Globalstyle";
import { Header } from "./components/Header";
import { Search } from "./routes/Search/Search";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/detail/:movieId">
          <Detail />
        </Route>

        <Route path="/Search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

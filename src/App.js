import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Search from "./components/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header}/>
        </Switch>
      </BrowserRouter>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

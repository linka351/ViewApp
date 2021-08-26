import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import SearchApi from "./components/SearchApi";

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
          <Route exact path="/" component={SearchApi}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

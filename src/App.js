import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            {/*<Route exact path="/mojeulubione" component={SearchApi}/>*/}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

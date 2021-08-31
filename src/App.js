import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import {ToWatch} from "./components/ToWatch";
import {Favourites} from "./components/Favourites";
import {Watched} from "./components/Watched";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Favourites" component={Favourites}/>
            <Route exact path="/Watched" component={Watched}/>
            <Route exact path="/ToWatch" component={ToWatch}/>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

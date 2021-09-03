import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/NavElements/Home";
import Header from "./components/NavElements/Header";
import {ToWatch} from "./components/NavElements/ToWatch";
import {Favourites} from "./components/NavElements/Favourites";
import {Watched} from "./components/NavElements/Watched";

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

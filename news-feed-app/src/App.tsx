import React from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Settings from './Pages/Settings/Settings';
import Archive from './Pages/Archive/Archive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const App: React.FC = () => {

  document.querySelector("body")?.classList.add("bg-primary")

  return (
    <Router>
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/archive" component={Archive} />
          <Route path="/" exact component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
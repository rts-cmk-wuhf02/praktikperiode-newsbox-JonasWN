import React, { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Settings from './Pages/Settings/Settings';
import Archive from './Pages/Archive/Archive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";


const App: React.FC = () => {

  let [checkedList, setCheckedList] = useState([
    {
      title: 'Europe',
      checked: true,
      id: uuidv4(),
    },
    {
      title: 'Health',
      checked: true,
      id: uuidv4(),
    },
    {
      title: 'Sports',
      checked: true,
      id: uuidv4(),
    },
    {
      title: 'Business',
      checked: true,
      id: uuidv4(),
    },
    {
      title: 'Travel',
      checked: true,
      id: uuidv4(),
    },
  ])

  const check = (catagory: string, state: boolean) => {
    let updated = {
      title: catagory,
      checked: state,
      id: uuidv4(),
    }
    let pos = checkedList.map(function (e) { return e.title; }).indexOf(catagory);
    let newArray = checkedList
    newArray[pos] = updated
    setCheckedList([...newArray])
  }

  return (
    <Router>
      <React.Fragment>
        <Header />

        <Switch>
          <Route path="/archive" component={Archive} />
          <Route path='/' exact render={(props) => <Home {...props} articles={checkedList} />} />
          <Route path='/settings' exact render={(props) => <Settings {...props} list={checkedList} checked={check} />} />
        </Switch>

        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
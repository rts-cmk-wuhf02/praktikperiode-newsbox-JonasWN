import React from 'react';
import Nav from './Components/Nav';
import Catagory from './Components/Catagory/Catagory'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <header className="container font-main px-4 m-auto py-4 bg-primary box-border" >
        <Nav />
      </header>
      <main className="">
        <Catagory />
      </main>
    </React.Fragment>
  );
}

export default App;
import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Page3 from './components/Page3/Page3';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">App-main
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <a href="/page1">to Page1</a>
        {/* <Page2/>
      <Page3/>  */}
      </div>
    </BrowserRouter>
  );
}

export default App;

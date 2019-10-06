import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Views/viewsStyles.css';
import St from './Views/StartPage';
import {BrowserRouter} from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <St/>
      </BrowserRouter>
    </div>
  );
}

export default App;

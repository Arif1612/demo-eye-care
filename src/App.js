import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='/header'>
            <Header></Header>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

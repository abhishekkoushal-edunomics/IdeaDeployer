import logo from './logo.svg';
import './App.css';
import Feature from './Feature';
import Price from './Price';
import Error from './Error';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

function App() {
  return (
  <>
    <Switch>
      <Route exact path='/' component={Feature} />
      <Route exact path='/feature' component={Feature} />
      <Route exact path='/price' component={Price} />
      <Route component={Error} />
    </Switch>
      <Feature />
  </>
  );
}

export default App;

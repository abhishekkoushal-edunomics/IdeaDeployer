
import logo from './logo.svg';
import './App.css';
import Feature from './Feature';
import Home from './Home';
import Price from './Price';
import Error from './Error';

import {BrowserRouter, Switch,Route} from 'react-router-dom';

function App() {
  return (
  <>
    <Switch>
      <Route exact path='/IdeaDeployer' component={Home} />
      <Route exact path='/IdeaDeployer/features' component={Feature} />
      <Route exact path='/IdeaDeployer/price' component={Price} />
      <Route component={Error} />
    </Switch>
  </>
  );
}

export default App;

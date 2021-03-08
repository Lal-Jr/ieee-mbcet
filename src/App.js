import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

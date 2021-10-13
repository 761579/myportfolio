
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
import education from './pages/Education';
import Experience from './pages/Experience';
import projects from './pages/projects';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/education" component={education} />
          <Route path="/experience" component={Experience} />
          <Route path="/project" component={projects} />
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;

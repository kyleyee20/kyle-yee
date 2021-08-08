import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.js'
import About from './pages/About.js'
import Project from './pages/Project.js'
import NavBar from './pages/NavBar.js'
import SocialLink from './components/SocialLink.js'


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
      </Switch>
      <SocialLink/>
    </BrowserRouter>
  );
}

export default App;

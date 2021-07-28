import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.js'
import About from './pages/About.js'
import SinglePost from './pages/SinglePost.js'
import Post from './pages/Post.js'
import Project from './pages/Project.js'
import NavBar from './pages/NavBar.js'


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

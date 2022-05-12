import React from 'react'
import AddMovie from './Components/AddMovie'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DisplayMovie from './Components/DisplayMovie';
import MovieDetails from './Components/MovieDetails';
import UpdateMovie from './Components/UpdateMovie';

function App() {
  return (
     <Router>
         <Switch>
          <Route exact path="/"><AddMovie/></Route>
          <Route  path="/display"><DisplayMovie/></Route>
           <Route  path="/movieDetails"><MovieDetails/></Route>
           <Route  path="/updateMovie"><UpdateMovie/></Route>
          
          
         </Switch>
      </Router>
  )
}

export default App;
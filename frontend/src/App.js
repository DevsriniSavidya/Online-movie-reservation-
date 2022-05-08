
import './App.css';
import AddMovies from './Components/AddMovies';
import DisplayMovies from './Components/DisplayMovies';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from './Components/Test';
import MovieDetails from './Components/MovieDetails';


function App() {
  return (
    <div>
      <Router>
         <Switch>
          {/* <Route exact path="/"><AddMovies/> </Route> */}
            <Route exact path="/"><Test />   </Route>
            <Route path="/movieDetails" > <MovieDetails/> </Route>
          
          {/* <Route exact path="/displayMovie"><DisplayMovies/>   </Route> */}
            
         </Switch>
      </Router>
      
  
    </div>
  );
}

export default App;

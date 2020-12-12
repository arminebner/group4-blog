import './App.css';
import React, {useState, useEffect} from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import client from "./client.js";
import SingleMovie from "./Components/SingleMovie";
import NavBar from './Components/Navbar'
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import SingleCategories from './Components/SingleCategories'
/* import Post from './Components/Post'; */


function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    client
      .getEntries({content_type:"movieblog"})
      .then ((json) => {
        console.log(json)
      return  setMovies(json.items)
      })
      .catch (() => console.log ("Upsi"))

  }, [])




  return (
      <div className="App">
          <NavBar /> 
       {/*  <SingleMovie movies={movies}/> */}
       <Router>
          <Switch>
            <Route exact path="/" component={Homepage} movies={movies}/>
            <Route exact path="/categories"> 
              <Categories movies={movies} />
            </Route>
            <Route path="/categories/:id"> 
              <SingleMovie movies={movies} />
            </Route>
            <Route path="/singlecategories" component={SingleCategories} movies={movies}/>
            {/* <Route exact path="/singlemovie" component={SingleMovie} movies={movies}/> */}
          </Switch>  
      </Router>
{/*       <Router>
        
          
          
          
       
          <Footer />
      </Router> */}
      {/* {movies.map((el)=> console.log(el.fields.trailer))}  */} 
      {/* {movies.map((el)=> <iframe title="elf" src={el.fields.trailer} width="560" height="315"></iframe>)} */}
      </div>
  );
}

/* 
comment */


export default App;

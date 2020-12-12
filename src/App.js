import './App.css';
import React, {useState, useEffect} from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import client from "./client.js";
import SingleMovie from "./Components/SingleMovie";
import NavBar from './Components/Navbar'
import Homepage from "./Components/Homepage";
import Categories from "./Components/Categories";
import SingleCategories from './Components/SingleCategories'
<<<<<<< HEAD
/* import Post from './Components/Post'; */
=======
import Post from './Components/Post';
import './armin.css'
>>>>>>> 4697c0c0b3536ed47f72bfe2c07f7241673e0dc8


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
       {/*  <SingleMovie movies={movies}/> */}
       <Router>
       <NavBar /> 
       <div className="main-wrapper">
          <Switch>
            <Route exact path="/" component={Homepage} movies={movies}/>
<<<<<<< HEAD
            <Route exact path="/categories"> 
              <Categories movies={movies} />
            </Route>
            <Route path="/categories/:id"> 
              <SingleMovie movies={movies} />
            </Route>
=======
            <Route path="/categories"> 
              <Categories movies={movies} />
            </Route>          
           {/*  <Route path="/categories" render={(props) => (
              <Categories {...props} movies={movies} />
            )}/> */}
>>>>>>> 4697c0c0b3536ed47f72bfe2c07f7241673e0dc8
            <Route path="/singlecategories" component={SingleCategories} movies={movies}/>
            {/* <Route exact path="/singlemovie" component={SingleMovie} movies={movies}/> */}
          </Switch>  
          </div>
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

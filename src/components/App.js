import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Page1 = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">PAGE TWO </Link>
    </div>
  )
}

const Page2 = () => {
  return (
    <div>
       PageTwo
       <button>
          Press Me
       </button>
       <Link to="/">PAGE ONE </Link>
    </div>)
}


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
          <Route path = '/' exact component = {Page1}/>
          <Route path = '/pagetwo'  component = {Page2}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;

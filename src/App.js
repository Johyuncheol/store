import React from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import contents_1 from './data/contents_1';
import contents_2 from './data/contents_2';
import contents_3 from './data/contents_3';
import { ContentCard } from './components/main';
import {Link , Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <header>
          <Header></Header> 
    </header>

<body>
  
<Route exact path = "/">
<section id="main">

    <div className="contents_1">
      {
        contents_1.map((a,i,n)=>{
          return <ContentCard cnt={contents_1[i]} i={i} key={i} n={1}/>
        })
      }
      
    </div>

    <div className="contents_2">
    {
        contents_2.map((a,i,n)=>{
          return <ContentCard cnt={contents_2[i]} i={i} key={i} n={2}/>
        })
      }

    </div>
    <div className="contents_3">
      {
        contents_3.map((a,i,n)=>{
          return <ContentCard cnt={contents_3[i]} i={i} key={i} n={3}/>
        })
      }
    </div>

</section>
</Route>


<footer> 
  <p>
      react 공부용
  </p>
</footer>
<script src="app.js"></script>
</body>
    </div>
  );
}

export default App;

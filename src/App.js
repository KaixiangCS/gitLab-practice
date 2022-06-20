import React from 'react';
import List from './List';
//import {FaGithubSquare} from 'react-icons/fa'
function App() {
  return <main>
    <section className = 'container'>
      <div className = 'title'>
        <h2>My projects</h2>
        <div className = 'underline'></div>
      </div>
      <List/>

    </section>
    
    </main>;
}

export default App;

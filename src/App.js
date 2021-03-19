import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Title from './components/Title'

function App() {
  return (
      <div>
        <BrowserRouter> 
              <Switch>
                <Route path = '/' component = {Title}  exact = {true}/>
              </Switch>
      </BrowserRouter>  
      </div>
  )
}

export default App



import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Layout>
            
              <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/sobre' exact={true} component={Sobre} />
                <Route path='/contato' exact={true} component={Contato} />
              </Switch>
            
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom'
import { Home } from './home'
import { Login } from './login'

export const Rout = () => (
  <main className="Rout">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login_page.tsx' component={Login}/>
    </Switch>
  </main>
)
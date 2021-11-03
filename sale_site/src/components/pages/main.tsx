import { Switch, Route } from 'react-router-dom'
import { Home } from './events'
import { Login } from './login_page'

export const Main = () => (
  <main className="Main">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login_page.tsx' component={Login}/>
    </Switch>
  </main>
)
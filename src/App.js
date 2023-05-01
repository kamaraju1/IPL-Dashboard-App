import {Route, Switch} from 'react-router-dom'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'
import Home from './components/Home'
import './App.css'

const App = () => (
  <>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/team-matches/:id" component={TeamMatches} />
        <Route path="/bad-path" component={NotFound} />
      </Switch>
    </div>
  </>
)
export default App

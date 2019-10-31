import React from "react"
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Form from './Form'
import Submit from './submit'
import '../styles/base.css'


function App(props) {
  return (
  <Router>
    <div>
      <Route exact path="/" component={Form}/>
      <Route path="/submitted" component={Submit}/>
    </div>
  </Router>
  )
}

export default App
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import BlogsList from './components/BlogsList'
import NotFound from './components/NotFound'
<<<<<<< HEAD
import BlogItemDetails from './components/BlogItemDetails'
=======
>>>>>>> origin/main

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={BlogsList} />
<<<<<<< HEAD
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/blogs/:id" component={BlogItemDetails} />
=======
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
>>>>>>> origin/main
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> origin/main

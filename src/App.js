import './App.css';
import { Navbar,Nav } from 'react-bootstrap'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import History from './history';
import green from './green';
import About from './about';
import Advancement from './advancement';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
          <Navbar.Brand href="">Blogging</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" sticky="top">
              <Nav.Link  href="/home">About</Nav.Link>
              <Nav.Link  href="/history">History</Nav.Link>
              <Nav.Link  href="/advancement">Advancement</Nav.Link>
              <Nav.Link  href="/greenrevolution">Green Revolution</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </div>
    <Switch>
      <Route path="/home" component={About} />
      <Route path="/history" component={History} />
      <Route path="/advancement" component={Advancement} />
      <Route path="/greenrevolution" component={green} />
    
    </Switch>
    </BrowserRouter>
  );
}

export default App;

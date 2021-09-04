import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import About from './pages/About';
import Menu from './pages/Menu/Menu';
import Footer from './components/Footer';

function App() {
  const minHeight = window.innerHeight - 1;

  return (
    <BrowserRouter>
      <div className="d-flex flex-fill flex-column bg-dark" style={ { minHeight } }>
        <Header />
        <div className="d-flex bgZigZag" style={ { minHeight } }>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

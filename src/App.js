import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const minHeight = window.innerHeight;

  return (
    <BrowserRouter>
      <div className="d-flex flex-fill flex-column" style={ { minHeight } }>
        <Header />
        <div className="d-flex bg-Twinz" style={ { paddingTop: minHeight * .1, minHeight } }>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

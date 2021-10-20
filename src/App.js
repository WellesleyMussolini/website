import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import * as Routes from './constants/routes';
import './App.css';
import Loader from 'react-loader-spinner';

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={
          <Loader
            type="Oval"
            color="#00BFFF"
            height={80}
            width={80}
            style={{
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        }>
          <Switch>
            <Route path={Routes.HOME} component={Home} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
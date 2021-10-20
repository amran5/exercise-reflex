import './App.css';
import Header from './pages/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Categories from './pages/Categories/Categories';
import NotFound from './pages/NotFound/NotFound';
import Trainers from './pages/Trainers/Trainers';
import Detail from './pages/Detail/Detail';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/detail/:serviceid">
              <Detail></Detail>
            </PrivateRoute>
            <PrivateRoute path="/category">
              <Categories></Categories>
            </PrivateRoute>
            <PrivateRoute path="/trainer">
              <Trainers></Trainers>
            </PrivateRoute>
            <Route path="/signIn">
              <Login></Login>
            </Route>
            <Route path="/signUp">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

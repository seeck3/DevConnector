import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
// import NotFound from './components/layout/NotFound';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Alert from './components/layout/Alert';
// import Dashboard from './components/dashboard/Dashboard';
// import CreateProfile from './components/profile-forms/CreateProfile';
// import PrivateRoute from './components/routing/PrivateRoute';
// import EditProfile from './components/profile-forms/EditProfile';
// import AddExperience from './components/profile-forms/AddExperience';
// import AddEducation from './components/profile-forms/AddEducation';
// import Profiles from './components/profiles/Profiles';
// import Profile from './components/profile/Profile';
// import Posts from './components/posts/Posts';
// import Post from './components/post/Post';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Routes component={Routes} />
          </Switch>

        </Fragment>
      </Router>
    </Provider>
  )
}
export default App;

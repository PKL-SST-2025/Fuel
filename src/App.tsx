import type { Component } from 'solid-js';
import LoginCard from './pages/LoginCard';
import { Router, Route, A } from '@solidjs/router';
import SignupCard from './pages/RegisterCard';
import ResetPasswordCard from './pages/ForgetPassword';
import Dashboard from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';  
import Company from './pages/Company';
import Scan from './pages/Scan';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Security from './pages/Security';
import Payment from './pages/Payment';

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={LoginCard} />
      <Route path="/register" component={SignupCard} />
      <Route path="/reset-password" component={ResetPasswordCard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/explore" component={Explore} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/company" component={Company} />
      <Route path="/scan" component={Scan} />
      <Route path="/wishlist" component={Wishlist} />
      <Route path="/profile" component={Profile} />
      <Route path="/security" component={Security} />
      <Route path="/payment" component={Payment} />
    </Router>
  );
};

export default App;

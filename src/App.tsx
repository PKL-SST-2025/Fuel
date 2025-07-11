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
import NotificationModal from './components/ui/notification-modal';
import { createSignal } from 'solid-js';
import Brand from './pages/Brand';

const App: Component = () => {
  const [notifOpen, setNotifOpen] = createSignal(false);
  const notifications = [
    { id: 1, status: 'danger' as const, title: 'Payment Succes', message: 'firstx payment 50.00 succes', time: '1 hours ago' },
    { id: 2, status: 'warning' as const, title: 'Payment Succes', message: 'firstx payment 50.00 succes', time: '1 hours ago' },
    { id: 3, status: 'success' as const, title: 'Payment Succes', message: 'firstx payment 50.00 succes', time: '1 hours ago' },
  ];
  // Agar bisa diakses di halaman lain
  if (typeof window !== 'undefined') {
    (window as any).setNotifOpen = setNotifOpen;
    (window as any).notifOpen = notifOpen;
  }
  return (
    <>
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
        <Route path="/brand" component={Brand} />
      </Router>
      <NotificationModal open={notifOpen()} onClose={() => setNotifOpen(false)} notifications={notifications} anchorRef={typeof window !== 'undefined' ? (window as any).notifAnchor : undefined} />
    </>
  );
};

export default App;

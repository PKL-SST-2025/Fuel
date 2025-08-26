import type { Component } from 'solid-js';
import { Router, Route, Navigate, useNavigate } from '@solidjs/router';
import { AuthProvider, useAuth } from './lib/auth';
import { createEffect, createSignal, Show } from 'solid-js';

// Pages
import LoginCard from './pages/LoginCard';
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
import Brand from './pages/Brand';
import NotificationModal from './components/ui/notification-modal';

// Protected Route Component
const RedirectToLogin: Component = () => {
  const currentPath = window.location.pathname;
  if (currentPath !== '/login') {
    localStorage.setItem('redirectAfterLogin', currentPath);
  }
  return <Navigate href="/login" />;
};

const ProtectedRoute = (props: { component: Component }) => {
  const [state] = useAuth();

  return (
    <Show when={!state.isLoading} fallback={<div>Loading...</div>}>
      <Show when={state.isAuthenticated} fallback={<RedirectToLogin />}>
        <props.component />
      </Show>
    </Show>
  );
};

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
    <AuthProvider>
      <div class="min-h-screen bg-gray-50">
        <Router>
          {/* Public Routes */}
          <Route path="/login" component={LoginCard} />
          <Route path="/register" component={SignupCard} />
          <Route path="/forgot-password" component={ResetPasswordCard} />
          
          {/* Protected Routes */}
          <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
          <Route path="/explore" component={() => <ProtectedRoute component={Explore} />} />
          <Route path="/notifications" component={() => <ProtectedRoute component={Notifications} />} />
          <Route path="/company" component={() => <ProtectedRoute component={Company} />} />
          <Route path="/scan" component={() => <ProtectedRoute component={Scan} />} />
          <Route path="/wishlist" component={() => <ProtectedRoute component={Wishlist} />} />
          <Route path="/profile" component={() => <ProtectedRoute component={Profile} />} />
          <Route path="/security" component={() => <ProtectedRoute component={Security} />} />
          <Route path="/payment" component={() => <ProtectedRoute component={Payment} />} />
          <Route path="/brand" component={() => <ProtectedRoute component={Brand} />} />
          
          {/* Redirect to home for unknown routes */}
          <Route path="*" component={() => <Navigate href="/" />} />
        </Router>
        <NotificationModal 
          open={notifOpen()} 
          onClose={() => setNotifOpen(false)} 
          notifications={notifications} 
          anchorRef={typeof window !== 'undefined' ? (window as any).notifAnchor : undefined} 
        />
      </div>
    </AuthProvider>
  );
};

export default App;

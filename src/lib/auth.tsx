import { createContext, useContext, onMount, ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';
import api from './api';

export interface User {
  id: string;
  email: string;
  nama_lengkap: string;
  role: string;
  no_hp?: string;
  first_name?: string;
  last_name?: string;
  country?: string;
  city_state?: string;
  kode_pos?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<User>;
  register: (userData: any) => Promise<any>;
  logout: () => void;
  fetchUserProfile: () => Promise<User | null>;
  updateUser: (userData: Partial<User>) => Promise<User>;
  clearError: () => void;
}

type AuthContextType = [AuthState, AuthActions];

const AuthContext = createContext<AuthContextType>();

export const AuthProvider: ParentComponent = (props) => {
  const [state, setState] = createStore<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  const actions: AuthActions = {
    login: async (email, password) => {
      setState({ isLoading: true, error: null });
      try {
        const response = await api.post('/login', { email, password });
        const { token, ...user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setState({ user, isAuthenticated: true, isLoading: false });
        return user;
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Login failed';
        setState({ error: errorMessage, isLoading: false });
        throw new Error(errorMessage);
      }
    },

    register: async (userData) => {
      setState({ isLoading: true, error: null });
      try {
        const response = await api.post('/register', userData);
        // The user will be redirected to the login page to log in manually.
        setState({ isLoading: false });
        return response.data;
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Registration failed';
        setState({ error: errorMessage, isLoading: false });
        throw new Error(errorMessage);
      }
    },

    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setState({ user: null, isAuthenticated: false });
      window.location.href = '/login';
    },

    fetchUserProfile: async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setState({ isLoading: false });
        return null;
      }
      // This function should not set loading state as it runs in the background
      try {
        const response = await api.get('/user/profile');
        const user = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        // Only update user data, don't change auth state
        setState({ user }); 
        return user;
      } catch (error) {
        // Don't log out on background refresh failure, just log the error
        console.error('Background profile refresh failed:', error);
        return null;
      }
    },

    clearError: () => {
      setState('error', null);
    },

    updateUser: async (userData) => {
      setState({ isLoading: true });
      try {
        const response = await api.patch(`/users/${state.user?.id}`, userData);
        const updatedUser = response.data;
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setState({ user: updatedUser, isLoading: false, error: null });
        return updatedUser;
      } catch (error: any) {
        const errorMessage = error.response?.data?.message || 'Update failed';
        setState({ isLoading: false, error: errorMessage });
        throw new Error(errorMessage);
      }
    },
  };

  onMount(() => {
    const token = localStorage.getItem('token');
    const userJson = localStorage.getItem('user');

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        setState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
        // Refresh user profile in the background
        actions.fetchUserProfile();
      } catch (e) {
        console.error('Failed to parse user from localStorage', e);
        // If local data is corrupt, log out
        actions.logout();
      }
    } else {
      // Not authenticated
      setState({ isLoading: false });
    }
  });

  const value: AuthContextType = [state, actions];

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

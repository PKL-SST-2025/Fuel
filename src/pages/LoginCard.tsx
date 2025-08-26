import { createSignal, Show } from 'solid-js';
import { Eye, EyeOff, Loader2 } from 'lucide-solid';
import { useNavigate } from '@solidjs/router';
import { useAuth } from '../lib/auth';
import monokrom from '../assets/monokrom.png';
import brandicon from '../assets/brandicon.png';

const LoginCard = () => {
  const navigate = useNavigate();
  const [state, { login }] = useAuth();
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);

  const handleSignIn = async (e: Event) => {
    e.preventDefault();
    try {
      await login(email(), password());
      navigate('/');
    } catch (error) {
      // Error is handled by the auth state
      console.error("Login failed:", error);
    }
  };

  const handleSignUp = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">

        {/* Logo Card */}
        <div class="relative hidden md:block">
          <div class="w-[38rem] h-[38rem] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-transparent"></div>
            <div class="relative z-10">
              <img src={monokrom} alt="Fuel" class="w-80 h-80" />
            </div>
            <div class="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>

        {/* Login Form */}
        <div class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div class="text-center mb-8">
            <div class="flex items-center justify-center gap-2 mb-4">
              <img src={brandicon} alt="Fuel" class="w-8 h-10" />
              <h1 class="text-2xl font-semibold text-gray-800">Fuel</h1>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Welcome Back!</h2>
            <p class="text-gray-600">Sign in to your account to continue</p>
          </div>
          
          <Show when={state.error}>
            <div class="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          </Show>
          <form onSubmit={handleSignIn} class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
                class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                placeholder="Enter your email"
                required
                disabled={state.isLoading}
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  id="password"
                  type={showPassword() ? 'text' : 'password'}
                  value={password()}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                  class="w-full px-4 py-3 pr-12 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your password"
                  required
                  disabled={state.isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword())}
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={state.isLoading}
                >
                  {showPassword() ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <button
                type="button"
                onClick={handleForgotPassword}
                class="text-sm text-blue-500 hover:text-blue-600 transition-colors disabled:opacity-50"
                disabled={state.isLoading}
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={state.isLoading}
              class="w-full flex justify-center items-center bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-medium"
            >
              <Show when={state.isLoading} fallback="Sign In">
                <Loader2 class="animate-spin h-5 w-5 mr-2" />
                Signing in...
              </Show>
            </button>

            <div class="text-center text-sm mt-6">
              <span class="text-gray-600">Don't have an account? </span>
              <button
                type="button"
                onClick={handleSignUp}
                class="text-blue-600 hover:text-blue-500 font-medium focus:outline-none disabled:opacity-50"
                disabled={state.isLoading}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;

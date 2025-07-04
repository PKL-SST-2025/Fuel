import { createSignal } from 'solid-js';
import { Eye, EyeOff } from 'lucide-solid';
import monokrom from '../assets/monokrom.png';
import brandicon from '../assets/brandicon.png';

const LoginCard = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);

  const handleSignIn = (e: Event) => {
    e.preventDefault();
    console.log('Sign in attempted with:', { email: email(), password: password() });
    window.location.href = '/dashboard';
  };

  const handleSignUp = () => {
    window.location.href = '/register';
  };

  const handleForgotPassword = () => {
    window.location.href = '/reset-password';
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col-reverse md:flex-row items-center gap-0 max-w-6xl w-full">
        {/* Logo Card */}
        <div class="relative">
          <div class="w-[38rem] h-[38rem] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-transparent"></div>
            <div class="relative z-10">
              <img src={monokrom} alt="Fuel" class="w-80 h-80" />
            </div>
            <div class="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl"></div>
          </div>
        </div>

        {/* Login Form */}
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 px-16 w-full max-w-sm sm:max-w-md">
          <div class="text-center mb-8">
            <div class="flex items-center justify-center gap-2 mb-2">
              <img src={brandicon} alt="Fuel" class="w-8 h-10" />
              <h1 class="text-xl sm:text-2xl font-semibold text-gray-800">Fuel</h1>
            </div>
            <p class="text-gray-600 text-sm sm:text-base">Welcome to fuel, please login to enter.</p>
          </div>

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
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword())}
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword() ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div class="text-right">
              <button
                type="button"
                class="text-sm text-blue-500 hover:text-blue-600 transition-colors"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
              <button
                type="submit"
                class="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={handleSignUp}
                class="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                Sign Up
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;

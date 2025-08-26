import { createSignal, Show } from 'solid-js';
import { useNavigate, A } from '@solidjs/router';
import { useAuth } from '../lib/auth';
import { Loader2, ArrowLeft } from 'lucide-solid';
import Checkbox from '../components/ui/checkbox';
import monokrom from '../assets/monokrom.png';
import brandicon from '../assets/brandicon.png';

const SignupCard = () => {
  const navigate = useNavigate();
  const [state, { register }] = useAuth();
  
  // Form state
  const [formData, setFormData] = createSignal({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
  });
  
  const [agreeToTerms, setAgreeToTerms] = createSignal(false);
  const [successMessage, setSuccessMessage] = createSignal('');

  const handleInput = (field: string) => (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [field]: target.value }));
  };

  const handleCreateAccount = async (e: Event) => {
    e.preventDefault();

    const data = formData();
    const userData = {
        nama_lengkap: `${data.first_name} ${data.last_name || ''}`.trim(),
        email: data.email,
        no_hp: data.phone || '081234567890', 
        password: data.password,
        password_confirmation: data.password_confirmation,
        jenis_kelamin: 'L', 
        tanggal_lahir: '2000-01-01', 
        foto_profile: '', 
        role: 'user' 
    };

    try {
      await register(userData);
      setSuccessMessage('Registrasi Berhasil! Mengarahkan ke halaman login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      // Error is handled by the auth state
      console.error("Registration failed:", error);
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 sm:px-6 sm:py-10">
      <div class="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full">
        {/* Logo Card - Sisi Kiri (Desktop) */}
        <div class="relative hidden md:block">
          <div class="w-[38rem] h-[38rem] bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-transparent to-transparent"></div>
            <div class="relative z-10">
              <img src={monokrom} alt="Fuel" class="w-80 h-80" />
            </div>
          </div>
        </div>

        {/* Register Form - Sisi Kanan */}
        <div class="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <div class="text-center mb-8">
            <img src={brandicon} alt="Logo" class="h-12 w-auto mx-auto mb-4" />
            <h2 class="text-2xl font-bold text-gray-900">
              Create Account
            </h2>
            <p class="text-gray-500 mt-1">
              Fill in your details to get started
            </p>
          </div>

          <Show when={state.error}>
            <div class="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {state.error}
            </div>
          </Show>
          <Show when={successMessage()}>
            <div class="mb-4 p-3 bg-green-50 text-green-700 rounded-md text-sm">
              {successMessage()}
            </div>
          </Show>
          <form onSubmit={handleCreateAccount} class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="first_name" class="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="first_name"
                    type="text"
                    value={formData().first_name}
                    onInput={handleInput('first_name')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>
              <div>
                <label for="last_name" class="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="last_name"
                    type="text"
                    value={formData().last_name}
                    onInput={handleInput('last_name')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="email"
                    type="email"
                    value={formData().email}
                    onInput={handleInput('email')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>
              
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="phone"
                    type="tel"
                    value={formData().phone}
                    onInput={handleInput('phone')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="password"
                    type="password"
                    value={formData().password}
                    onInput={handleInput('password')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div class="min-h-[52px] flex items-center">
                  <input
                    id="password_confirmation"
                    type="password"
                    value={formData().password_confirmation}
                    onInput={handleInput('password_confirmation')}
                    class="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 disabled:opacity-70"
                    disabled={state.isLoading}
                  />
                </div>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex items-center h-5">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms()}
                  onCheckedChange={(checked: boolean) => setAgreeToTerms(checked)}
                  class={`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${state.isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={state.isLoading}
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="text-gray-700">
                  I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
              </div>
            </div>

            <div class="mt-6">
              <button
                type="submit"
                disabled={state.isLoading || !agreeToTerms()}
                class={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${!agreeToTerms() || state.isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {state.isLoading ? (
                  <>
                    <Loader2 class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                    Creating account...
                  </>
                ) : 'Create account'}
              </button>
              
              <p class="mt-4 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <A href="/login" class="font-medium text-blue-600 hover:text-blue-500">
                  Sign in
                </A>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;

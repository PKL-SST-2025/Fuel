import { createSignal } from 'solid-js';
import Checkbox from '../components/ui/checkbox';

const SignupCard = () => {
  const [firstName, setFirstName] = createSignal('');
  const [lastName, setLastName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [phone, setPhone] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [repeatPassword, setRepeatPassword] = createSignal('');
  const [agreeToTerms, setAgreeToTerms] = createSignal(false);

  const handleCreateAccount = (e: Event) => {
    e.preventDefault();
    console.log('Create account attempted with:', {
      firstName: firstName(),
      lastName: lastName(), 
      email: email(),
      phone: phone(),
      password: password(),
      repeatPassword: repeatPassword(),
      agreeToTerms: agreeToTerms()
    });
    window.location.href = '/';
  };

  return (
    <div class="min-h-screen flex items-center justify-center px-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <div class="w-full max-w-2xl">
        <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-transparent"></div>
          <div class="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl"></div>

          <div class="relative z-10">
            <div class="text-center mb-8">
              <h1 class="text-3xl text-left md:text-4xl font-bold text-white mb-2">
                Let's Get Started
              </h1>
              <p class="text-blue-100 text-left text-lg">
                Create your account
              </p>
            </div>

            <form onSubmit={handleCreateAccount} class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label for="firstName" class="block text-white font-medium mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName()}
                    onInput={(e) => setFirstName(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-white font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName()}
                    onInput={(e) => setLastName(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label for="email" class="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email()}
                    onInput={(e) => setEmail(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label for="phone" class="block text-white font-medium mb-2">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone()}
                    onInput={(e) => setPhone(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label for="password" class="block text-white font-medium mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password()}
                    onInput={(e) => setPassword(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label for="repeatPassword" class="block text-white font-medium mb-2">
                    Repeat Password
                  </label>
                  <input
                    id="repeatPassword"
                    type="password"
                    value={repeatPassword()}
                    onInput={(e) => setRepeatPassword(e.currentTarget.value)}
                    class="w-full px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div class="flex items-center space-x-3 mt-6">
                <Checkbox
                  id="terms"
                  checked={agreeToTerms()}
                  onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
                  class="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
                />
                <label for="terms" class="text-white text-sm cursor-pointer">
                  I agree to all the term, privacy policy and fees
                </label>
              </div>

              <div class="pt-4">
                <button
                  type="submit"
                  class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;

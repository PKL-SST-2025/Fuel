import { createSignal } from 'solid-js';

const ResetPasswordCard = () => {
  const [newPassword, setNewPassword] = createSignal('');
  const [repeatPassword, setRepeatPassword] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Reset password attempted with:', {
      newPassword: newPassword(),
      repeatPassword: repeatPassword()
    });
    window.location.href = '/';
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200 p-20">
      <div class="w-full max-w-md">
        <div class="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl shadow-2xl p-10 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-transparent"></div>
          <div class="absolute -inset-6 bg-blue-500/20 rounded-3xl blur-3xl"></div>

          <div class="relative z-10">
            <div class="text-center mb-8">
              <h1 class="text-2xl md:text-3xl text-left font-bold text-white mb-2">
                Reset Password
              </h1>
              <p class="text-blue-100 text-left text-sm md:text-base">
                Now set a new password for your account
              </p>
            </div>

            <form onSubmit={handleSubmit} class="space-y-6">
              <div>
                <label for="newPassword" class="block text-white font-medium mb-3 text-sm md:text-base">
                  New Password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword()}
                  onInput={(e) => setNewPassword(e.currentTarget.value)}
                  class="w-full px-4 py-3 md:py-4 rounded-xl border-0 bg-white/95 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder=""
                  required
                />
              </div>

              <div>
                <label for="repeatPassword" class="block text-white font-medium mb-3 text-sm md:text-base">
                  Repeat Password
                </label>
                <input
                  id="repeatPassword"
                  type="password"
                  value={repeatPassword()}
                  onInput={(e) => setRepeatPassword(e.currentTarget.value)}
                  class="w-full px-4 py-3 md:py-4 rounded-xl border-0 bg-white/95 backdrop-blur-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder=""
                  required
                />
              </div>

              <div class="pt-4">
                <button
                  type="submit"
                  class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] text-sm md:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCard;

<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg shadow-xl w-full max-w-md p-8">
            <!-- Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-gray-800">Login</h1>
                <p class="text-gray-600 mt-2">Welcome back to CliqueBoard</p>
            </div>

            <!-- Form -->
            <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        v-model="email"
                        type="email"
                        placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        required
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Enter your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        required
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Sign In
                </button>
            </form>

            <!-- Guest Login -->
            <div class="mt-6">
                <button
                    @click="guestLogin"
                    class="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                    Continue as Guest
                </button>
            </div>

            <!-- Footer -->
            <p class="text-center text-gray-600 text-sm mt-6">
                Don't have an account?
                <a href="#" class="text-blue-600 font-semibold hover:underline">Sign up</a>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SLogin',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleLogin() {
            console.log('Login:', this.email, this.password)
            // Add login logic here
        },
        guestLogin() {
            console.log('Guest login')
            // Add guest login logic here
        }
    }
}
</script>
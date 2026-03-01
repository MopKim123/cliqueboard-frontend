<template>
  <div class="relative flex min-h-screen items-center justify-center pt-14 overflow-hidden">

    <!-- Blurry background -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-2xl scale-110"
      style="background-image: url('/background.png')"
    ></div>

    <!-- Optional dark overlay (better contrast) -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Content -->
    <div class="relative w-full max-w-sm rounded-lg border bg-card/60 backdrop-blur p-6 shadow-sm">
      <h1 class="mb-6 text-2xl font-semibold text-center">Login</h1>

      <form @submit="onSubmit" class="space-y-4">
        <SBaseInput
          name="username"
          label="Username"
          placeholder="Enter username"
          class="bg-white"
        />

        <SBaseInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter password"
          class="bg-white"
        />

        <Button type="submit" class="w-full">
          Sign In
        </Button>
      </form>

      <div class="mt-4 text-center text-sm">
        Don’t have an account?
        <NuxtLink
          to="/signup"
          class="font-medium text-secondary hover:underline"
        >
          Sign up
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import SBaseInput from '~/components/base/SBaseInput.vue'
import * as z from 'zod'

definePageMeta({
  layout: 'guest',
  middleware: 'guest',
})

const router = useRouter()
const isLoggedIn = useState('isLoggedIn', () => false)

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
  })
)

const form = useForm({
  validationSchema: formSchema,
})

const {
    execute: login,
    error: loginError,
} = useApiFetch('/auth/login', {
    method: 'POST',
    body: form.values,
})

const onSubmit = form.handleSubmit(async () => {
    await login()

    if (loginError.value) {
        const normalized = cliqueBoardError(loginError.value)

        console.error("Login Failed: ", normalized)

        toast.error("Login Failed: Check your credentials and try again.")

        return 
    } else {
      isLoggedIn.value = true
      await router.push('/home')
    }

})
</script>

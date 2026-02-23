// composables/useApiError.ts
import { toast } from 'vue-sonner'

interface ApiErrorShape {
    status?: number
    statusMessage?: string
    data?: {
        message?: string
    }
}

export const useApiError = () => {
    const handleError = (error: unknown): string => {
        const err = error as ApiErrorShape

        const message =
            err?.data?.message ||
            err?.statusMessage ||
            'Something went wrong'

        console.error('API Error:', message)

        toast?.error({
            title: 'Error',
            description: message,
        })

        return message
    }

    const checkAndHandleFetchError = (
        error: unknown,
        method?: string
    ) => {
        const err = error as ApiErrorShape

        // Example logic
        if (err.status === 401) {
            // unauthorized → maybe redirect to login
            navigateTo('/login')
            return
        }

        if (err.status === 500) {
            // server error → show toast
            handleError(err)
            return
        }

        // fallback
        handleError(err)
    }

    return {
        handleError,
        checkAndHandleFetchError
    }
}
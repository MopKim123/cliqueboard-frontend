import { toast } from 'vue-sonner'

export const useApiError = (error: any) => {
    const message =
        error?.data?.message ||
        error?.statusMessage ||
        'Something went wrong'

    console.error('API Error:', message)

    // Optional: global toast
    if (toast) {
        toast.error({
            title: 'Error',
            description: message,
            variant: 'destructive',
        })
    }

    return message
}

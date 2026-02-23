// utils/cliqueBoardError.ts

interface NormalizedApiError {
    status: number
    message: string
    data?: unknown
}

export function cliqueBoardError(error: unknown): NormalizedApiError {
    // If it's a FetchError (Nuxt / ofetch)
    if (typeof error === 'object' && error !== null) {
        const err = error as {
            status?: number
            statusCode?: number
            statusMessage?: string
            message?: string
            data?: unknown
            response?: {
                status?: number
                _data?: unknown
            }
        }

        const status =
            err.status ||
            err.statusCode ||
            err.response?.status ||
            500

        const data =
            err.data ||
            err.response?._data

        const message =
            (data as { message?: string })?.message ||
            err.statusMessage ||
            err.message ||
            'Something went wrong'

        return {
            status,
            message,
            data
        }
    }

    return {
        status: 500,
        message: 'Unknown error',
        data: null
    }
}
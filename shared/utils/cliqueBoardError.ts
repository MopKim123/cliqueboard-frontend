// utils/cliqueBoardError.ts

interface NormalizedApiError {
    status: number
    message: string
    data?: unknown
}

export function cliqueBoardError(error: unknown): NormalizedApiError {
    console.error('Raw error: ', error)

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

        // 1️⃣ Backend JSON message (if exists)
        let message =
            (data as { message?: string })?.message

        // 2️⃣ If no backend message, map common statuses
        if (!message) {
            if (status === 401) message = 'Invalid credentials'
            else if (status === 403) message = 'Access denied'
            else if (status === 404) message = 'Resource not found'
            else if (status === 500) message = 'Server error'
        }

        // 3️⃣ Final fallback
        if (!message) {
            message = 'Something went wrong'
        }

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
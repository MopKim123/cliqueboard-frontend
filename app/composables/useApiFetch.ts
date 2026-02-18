export const useApiFetch = async <T>(
    url: string,
    options?: Parameters<typeof useFetch<T>>[1]
) => {
    const config = useRuntimeConfig()

    const { data, error, pending, refresh } = await useFetch<T>(url, {
        baseURL: config.public.apiBase,
        credentials: 'include',
        ...options,
    })

    if (error.value) {
        useApiError(error.value)
    }

    return {
        data,
        error,
        pending,
        refresh,
    }
}

import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(
    url: string | (() => string),
    options?: UseFetchOptions<T>,
    showErrorPage: boolean = true
) {
    const { checkAndHandleFetchError } = useApiError()
    const headers = useRequestHeaders(['cookie'])

    return useFetch(url, {
        baseURL: useRuntimeConfig().public.apiBase,
        credentials: 'include',
        headers: headers,
        immediate: false,
        method: options?.method || 'GET',
        watch: false,
        dedupe: 'defer',
        ...options,
        $fetch: useNuxtApp().$api,
        onRequestError({ error }) {
            const requestError = cliqueBoardError(error)
            showError({
                status: requestError.status,
                data: requestError.data,
                message: requestError.message
            })
        },
        onResponseError({ response, options: responseOptions }) {
            const ignoreStatus = [403, 402]

            if (showErrorPage && !ignoreStatus.includes(response.status)) {
                checkAndHandleFetchError(
                    cliqueBoardError(response),
                    responseOptions?.method?.toString()
                )
            }
        }
    })
}
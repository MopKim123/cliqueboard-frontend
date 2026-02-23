// composables/useFetchApi.ts
import type { UseFetchOptions } from 'nuxt/app'

export function useApiFetch<T>(
    url: string | (() => string),
    options?: UseFetchOptions<T>,
    showErrorPage: boolean = true
) {
    const { checkAndHandleFetchError } = useApiError()
    const headers = useRequestHeaders(['cookie'])
    const config = useRuntimeConfig()

    return useFetch<T>(url, {
        baseURL: config.public.apiBase,
        credentials: 'include',
        headers,
        immediate: false,
        watch: false,
        dedupe: 'defer',
        $fetch: useNuxtApp().$api,
        ...options,
        onRequestError({ error }) {
            const requestError = cliqueBoardError(error)
            showError({
                status: requestError.status,
                data: requestError.data,
                message: requestError.message
            })
        },
        onResponseError({ response, options: responseOptions }) {
            const ignoreStatus = [402, 403]
            if (showErrorPage && !ignoreStatus.includes(response.status)) {
                checkAndHandleFetchError(
                    cliqueBoardError(response),
                    responseOptions?.method?.toString()
                )
            }
        }
    })
}
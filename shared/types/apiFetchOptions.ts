import type { useFetch } from "nuxt/app";

interface ApiFetchOptions extends Omit<Parameters<typeof useFetch>[1], 'method'> {
    method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
}
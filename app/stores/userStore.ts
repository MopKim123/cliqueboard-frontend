export const useUserStore = defineStore('user', () => {
  const defaultUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    birthday: '',
    username: '',
    createdAt: '',
  }

  const user = ref<User>({ ...defaultUser })
  const isTermsAccepted = ref<boolean>()

  const $reset = () => {
  user.value = { ...defaultUser }
  }

  const {
    execute: signout,
    error: signoutError
  } = useApiFetch('/auth/logout', {
    method: 'DELETE'
  })

  const {
    execute: checkRefreshToken,
    error: checkRefreshTokenError
  } = useApiFetch('/auth/token/check', {
    method: 'GET'
  })

  const {
    execute: fetchOperator,
    data: userData,
    error: userError
  } = useApiFetch<User>('/user/me')

  watch(userData, (newValue) => {
    if (newValue) {
      user.value = newValue
    }
  })

  return {
    // State
    user,
    userData,
    isTermsAccepted,

    signoutError,
    userError,
    checkRefreshTokenError,
    // Mutation Actions
    $reset,

    // Actions
    signout,
    checkRefreshToken,
    fetchOperator
  }
})

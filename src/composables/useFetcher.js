import { ref } from 'vue'

export function useFetcher(url, options = {}) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  // Default options for the fetch request
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // Add any default headers here if needed
    },
  }

  // Combine default options with user-provided options
  const fetchOptions = ref({ ...defaultOptions, ...options })

  async function fetchData() {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(url.value, fetchOptions.value)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err.message || 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData,
  }
}

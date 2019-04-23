import axios from 'axios'

export const host = 'http://localhost:8000/api/v1'
// export const host = 'http://138.197.139.181:8000/api/v1'

export const request = axios.create({
  baseURL: host,
  timeout: 60000,
})

export const showError = error => {
  return {
    hasError: true,
    status: 404,
    error: error,
  }
}

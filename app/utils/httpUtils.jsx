import axios from 'axios'

export const host = '/api/v1'

export const request = axios.create({
  baseURL: host,
  timeout: 60000,
})

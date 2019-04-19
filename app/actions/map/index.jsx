import { request } from '../../utils/httpUtils'

export async function createNewGame(params) {
  const response = await request.post('/game/', params)
  return response.data
}

export async function getMapState(user) {
  const response = await request.get('/mapgame/7/')
  return response.data
}

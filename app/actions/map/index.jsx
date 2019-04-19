import { request } from '../../utils/httpUtils'

export async function getMapState(user) {
  const response = await request.get('/' + user + '/map', param)
  return response.data
}

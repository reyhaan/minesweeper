import { request } from '../../utils/httpUtils'

export async function createNewGame(params) {
  const response = await request.post('/game/', params)
  return response.data
}

export async function getNewMap(game) {
  const response = await request.put('/game/new/', {
    uuid: game.uuid,
    name: game.name,
    map_state: '[]',
  })
  return response.data
}

export async function getMap(uuid) {
  const response = await request.get('/game/' + uuid + '/')
  return response.data
}

export async function makeMove(game, move) {
  const response = await request.put('/game/move/', {
    uuid: game.uuid,
    name: game.name,
    map_state: game.map_state,
    map_original: '[]',
    move: move,
  })
  return response.data
}

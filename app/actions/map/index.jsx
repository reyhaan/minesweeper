import { request, showError } from '../../utils/httpUtils'

export async function createNewGame(params) {
  try {
    const response = await request.post('/game/', params)
    return response.data
  } catch (e) {
    return showError(e)
  }
}

export async function getNewMap(game) {
  var params = {
    uuid: game.uuid,
    name: game.name,
    map_state: '[]',
  }

  try {
    const response = await request.put('/game/new/', params)
    return response.data
  } catch (e) {
    return showError(e)
  }
}

export async function getMap(uuid) {
  try {
    const response = await request.get('/game/' + uuid + '/')
    return response.data
  } catch (e) {
    return showError(e)
  }
}

export async function makeMove(game, move) {
  var params = {
    uuid: game.uuid,
    name: game.name,
    map_state: JSON.stringify(game.map_state),
    move: move,
  }

  try {
    const response = await request.put('/game/move/', params)
    // console.log(response.data)
    return response.data
  } catch (e) {
    return showError(e)
  }
}

import { configure, observable, action } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable game
  @observable name
  @observable uuid
  @observable mapState
  @observable hasLost
  @observable hasWon

  @action
  setGameHasLost(result) {
    this.hasLost = result
  }

  @action
  getGameLost() {
    return this.hasLost
  }

  @action
  setGameHasWon(result) {
    this.hasWon = result
  }

  @action
  getGameWon() {
    return this.hasWon
  }

  @action
  getGame() {
    return this.game
  }

  @action
  setGame(newGame) {
    this.game = newGame
    this.setName(newGame.name)
    this.setUuid(newGame.uuid)
    this.setMapState(newGame.map_state)
  }

  @action
  getUuid() {
    return this.uuid
  }

  @action
  setUuid(uuid) {
    this.uuid = uuid
  }

  @action
  getName() {
    return this.name
  }

  @action
  setName(name) {
    this.name = name
  }

  @action
  updateGameState(newState) {
    this.game.map_state = newState
    this.mapState = newState
  }

  @action
  getMapState() {
    return this.mapState
  }

  @action
  setMapState(newState) {
    this.mapState = newState
  }
}

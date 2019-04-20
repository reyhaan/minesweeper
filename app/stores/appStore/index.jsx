import { configure, observable, action } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable game
  @observable name
  @observable uuid
  @observable mapState

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
    this.game.mapState = newState
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

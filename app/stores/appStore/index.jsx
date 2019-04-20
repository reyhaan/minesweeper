import { configure, observable, action } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable
  mapState2 = [[{ adj: 0, state: 0 }]]

  @observable
  game

  @observable
  mapState

  constructor() {}

  @action
  getGame() {
    return this.game
  }

  @action
  getUuid() {
    return this.game.uuid
  }

  @action
  getUsername() {
    return this.game.name
  }

  @action
  setGame(newGame) {
    this.game = newGame
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

import { configure, observable, action } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable
  mapState

  constructor() {}

  @action
  getMapState() {
    return this.mapState
  }

  @action
  setMapState(newState) {
    this.mapState = newState
  }
}

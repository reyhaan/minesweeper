import { configure, observable, action } from 'mobx'

configure({ enforceActions: 'always' })

export default class AppStore {
  @observable
  mapState = [
    [
      { adj: 0, state: 1 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 4, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 3 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
    [
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
      { adj: 0, state: 0 },
    ],
  ]

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

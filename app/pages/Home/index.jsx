import React from 'react'
import 'babel-polyfill'
import { observer } from 'mobx-react'
import Map from '../../components/Map'
import { appStore } from '../../stores'
import { createNewGame, makeMove, getNewMap, getMap } from '../../actions/map'
import { reactLocalStorage } from 'reactjs-localstorage'
import uuidv1 from 'uuid'
import './style.scss'

@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    reactLocalStorage.setObject('game', {})
    var game = reactLocalStorage.getObject('game')
    if (Object.keys(game).length !== 0) {
      console.log(game.uuid)
      // var game = await getMap(game.uuid)
      appStore.setGame(game)
      appStore.setMapState(JSON.parse(game.map_state))
    } else {
      var params = {
        name: 'random name',
        uuid: uuidv1(),
        map_state: '[]',
      }
      var new_game = await createNewGame(params)
      reactLocalStorage.setObject('game', new_game)
      appStore.setGame(new_game)
      appStore.setMapState(JSON.parse(new_game.map_state))
    }
  }

  async handleCellClick(move) {
    var newMapState = await makeMove(appStore.getGame(), move)
    appStore.setMapState(newMapState.new_map_state)
    console.log(newMapState)
  }

  async handleCellRightClick() {
    var newMapState = await makeMove(appStore.getGame(), move)
    appStore.setMapState(newMapState.new_map_state)
    console.log(newMapState)
  }

  async handleNewMapClick() {
    var newMapState = await getNewMap(appStore.getGame())
    var params = {
      name: newMapState.user.name,
      uuid: newMapState.user.uuid,
      map_state: JSON.stringify(newMapState.new_map_state),
    }
    reactLocalStorage.setObject('game', params)
    appStore.setMapState(newMapState.new_map_state)
    console.log(newMapState)
  }

  render() {
    return (
      <div className="home-container">
        <Map
          game={appStore.getGame()}
          mapState={appStore.mapState}
          onCellClick={move => this.handleCellClick(move)}
          onCellRightClick={move => this.handleCellRightClick(move)}
        />
        <div className="btn btn__get-new" onClick={() => this.handleNewMapClick()}>
          GET NEW MAP
        </div>
      </div>
    )
  }
}

export default Home

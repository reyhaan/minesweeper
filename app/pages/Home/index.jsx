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
  async componentDidMount() {
    reactLocalStorage.setObject('game', {})
    var game = reactLocalStorage.getObject('game')
    if (Object.keys(game).length !== 0) {
      appStore.setGame(game)
    } else {
      var params = {
        name: 'random name',
        uuid: uuidv1(),
        map_state: '[]',
      }
      var new_game = await createNewGame(params)

      new_game['map_state'] = JSON.parse(new_game['map_state'])

      reactLocalStorage.setObject('game', new_game)
      appStore.setGame(new_game)
    }
  }

  async handleCellClick(move) {
    var newMapState = await makeMove(appStore.getGame(), move)
    appStore.updateGameState(newMapState.new_map_state)
  }

  async handleNewMapClick() {
    var newMapState = await getNewMap(appStore.getGame())
    var params = {
      name: newMapState.user.name,
      uuid: newMapState.user.uuid,
      map_state: newMapState.new_map_state,
    }
    reactLocalStorage.setObject('game', params)
    appStore.updateGameState(newMapState.new_map_state)
  }

  render() {
    return (
      <div className="home-container">
        <p className="title">Save a Bro crossing this mine field!</p>
        <Map
          game={appStore.getGame()}
          mapState={appStore.mapState}
          onCellClick={move => this.handleCellClick(move)}
          onCellRightClick={move => this.handleCellClick(move)}
        />
        <p className="result">Lost</p>
        <div className="btn btn__get-new" onClick={() => this.handleNewMapClick()}>
          GET NEW MAP
        </div>
      </div>
    )
  }
}

export default Home

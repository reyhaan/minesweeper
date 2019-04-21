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
    // reactLocalStorage.setObject('game', {})
    var game = reactLocalStorage.getObject('game')
    if (Object.keys(game).length !== 0) {
      var hasLost = reactLocalStorage.getObject('hasLost')
      var hasWon = reactLocalStorage.getObject('hasWon')
      appStore.setGame(game)
      appStore.setGameHasLost(JSON.parse(hasLost))
      appStore.setGameHasWon(JSON.parse(hasWon))
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
    if (
      appStore.getGameWon() ||
      appStore.getGameLost() ||
      JSON.parse(reactLocalStorage.get('hasLost')) ||
      JSON.parse(reactLocalStorage.get('hasWon'))
    ) {
      return
    }

    var newMapState = await makeMove(appStore.getGame(), move)

    appStore.updateGameState(newMapState.new_map_state)
    reactLocalStorage.setObject('game', appStore.getGame())

    if (newMapState.hasLost) {
      appStore.setGameHasLost(true)
      reactLocalStorage.set('hasLost', true)
    } else if (newMapState.hasWon) {
      appStore.setGameHasWon(true)
      reactLocalStorage.set('hasWon', true)
    }
  }

  async handleNewMapClick() {
    var newMapState = await getNewMap(appStore.getGame())
    var params = {
      name: newMapState.user.name,
      uuid: newMapState.user.uuid,
      map_state: newMapState.new_map_state,
    }
    reactLocalStorage.setObject('game', params)
    reactLocalStorage.set('hasLost', false)
    reactLocalStorage.set('hasWon', false)
    appStore.setGameHasLost(false)
    appStore.setGameHasWon(false)
    appStore.updateGameState(newMapState.new_map_state)
  }

  render() {
    return (
      <div className="home-container">
        <p className="title">Mine-Bro</p>
        <p className="sub-title">Help a bro cross this mine field</p>
        <Map
          game={appStore.getGame()}
          mapState={appStore.mapState}
          onCellClick={move => this.handleCellClick(move)}
          onCellRightClick={move => this.handleCellClick(move)}
        />
        {appStore.hasLost && <p className="result result__lost">Woah! You just killed a bro!</p>}
        {appStore.hasWon && <p className="result result__won">Congrats! You saved a bro, bro!</p>}
        <div className="btn btn__get-new" onClick={() => this.handleNewMapClick()}>
          RESET
        </div>
      </div>
    )
  }
}

export default Home

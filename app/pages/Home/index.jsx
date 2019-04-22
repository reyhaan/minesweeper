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
  setNewGame(new_game) {
    new_game['map_state'] = JSON.parse(new_game['map_state'])
    reactLocalStorage.setObject('game', new_game)
    reactLocalStorage.set('hasWon', false)
    reactLocalStorage.set('hasLost', false)
    appStore.setGame(new_game)
    this.props.history.push({
      pathname: '/' + new_game.uuid,
    })
  }

  async componentDidMount() {
    var params = {
      name: 'random name',
      uuid: uuidv1(),
      map_state: '[]',
    }
    var savedGame = reactLocalStorage.getObject('game')
    var uuid = this.props.match.params.uuid

    if (Object.keys(savedGame).length !== 0 || (Object.keys(savedGame).length === 0 && uuid)) {
      // find if local session is present at server
      var game = await getMap(uuid || savedGame.uuid)

      // local game is not in sync with server
      if (game.status === 404) {
        var new_game = await createNewGame(params)
        this.setNewGame(new_game)

        // local game is synced with server, we can update the states for the game
      } else {
        appStore.setGame(game)
        appStore.setGameHasLost(JSON.parse(reactLocalStorage.get('hasLost')))
        appStore.setGameHasWon(JSON.parse(reactLocalStorage.get('hasWon')))
        this.props.history.push({
          pathname: '/' + game.uuid,
        })
      }
    } else {
      var new_game = await createNewGame(params)
      this.setNewGame(new_game)
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
    var newMap = await getNewMap(appStore.getGame())
    appStore.setGameHasLost(false)
    appStore.setGameHasWon(false)
    appStore.updateGameState(newMap.new_map_state)

    // TODO: Find a better way to sync local storage state
    reactLocalStorage.setObject('game', appStore.getGame())
    reactLocalStorage.set('hasLost', false)
    reactLocalStorage.set('hasWon', false)
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
        {appStore.hasLost && <p className="result result__lost">Woah! Bro just died!</p>}
        {appStore.hasWon && <p className="result result__won">Congrats! You saved a bro, bro!</p>}
        <div className="btn btn__get-new" onClick={() => this.handleNewMapClick()}>
          RESET
        </div>
      </div>
    )
  }
}

export default Home

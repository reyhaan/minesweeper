import React from 'react'
import { observer } from 'mobx-react'
import Map from '../../components/Map'
import { appStore } from '../../stores'
import { createNewGame } from '../../actions/map'
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
    var game = reactLocalStorage.getObject('game')
    if (game !== null) {
      appStore.setGame(game)
    } else {
      var params = {
        name: 'random name',
        uuid: uuidv1(),
        map_state: '[]',
      }
      var new_game = await createNewGame(params)
      reactLocalStorage.setObject('game', new_game)
      appStore.setGame(new_game)
    }
  }

  render() {
    return (
      <div className="home-container">
        <Map mapState={appStore.getGame()} />
      </div>
    )
  }
}

export default Home

import React from 'react'
import { observer } from 'mobx-react'
import Map from '../../components/Map'
import { appStore } from '../../stores'
import './style.scss'

@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="home-container">
        <Map mapState={appStore.getMapState()} />
      </div>
    )
  }
}

export default Home

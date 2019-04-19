import React from 'react'
import { observer } from 'mobx-react'
import Map from '../../components/Map'
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
        <Map />
      </div>
    )
  }
}

export default Home

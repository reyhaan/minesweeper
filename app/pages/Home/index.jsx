
import React from 'react'
import './style.scss'
import { observer } from 'mobx-react'

@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <p>Home page</p>
    )
  }
}

export default Home
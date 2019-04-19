import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'
import './style.scss'

@observer
class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleCellClick() {
    console.log('something')
  }

  createMap() {
    var rows = Array(this.props.row)
      .fill(1)
      .map((item, row) => {
        return (
          <div className="row" key={row}>
            {this.createColumns(row)}
          </div>
        )
      })

    return rows
  }

  createColumns(row) {
    var cols = Array(this.props.col)
      .fill(1)
      .map((item, col) => {
        return (
          <div
            key={col}
            id={`${row}${col}`}
            onClick={() => this.handleCellClick()}
            className="cell"
          />
        )
      })

    return cols
  }

  render() {
    return <div className="map-container">{this.createMap()}</div>
  }
}

Map.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
}

Map.defaultProps = {
  row: 15,
  col: 20,
}

export default Map

import React from 'react'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
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

  componentDidMount() {}

  createMap() {
    var rows = this.props.mapState.map((row, rowIndex) => {
      return (
        <div className="row" key={rowIndex}>
          {this.createCells(rowIndex, row)}
        </div>
      )
    })

    return rows
  }

  createCells(rowIndex, row) {
    var cols = row.map((cell, col) => {
      var cellClass = 'cell__default'

      if (cell.state === 1) {
        cellClass = 'cell__revealed'
      } else if (cell.state === 2) {
        cellClass = 'cell__has-mine'
      } else if (cell.state === 3) {
        cellClass = 'cell__flagged'
      }

      return (
        <div
          key={col}
          id={`${rowIndex}${col}`}
          onClick={() => this.handleCellClick()}
          className={'cell ' + cellClass}
        >
          {cell.adj != 0 && <div className="cell__value">{cell.adj}</div>}
        </div>
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
  mapState: PropTypes.any,
}

Map.defaultProps = {
  row: 15,
  col: 20,
  mapState: [],
}

export default Map

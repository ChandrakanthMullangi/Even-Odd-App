// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, status: 'Count is Even'}

  updateCount = () => {
    this.setState(() => {
      const randomCount = parseInt(Math.random() * 100)

      if (randomCount % 2 === 0) {
        return {count: randomCount, status: 'Count is Even'}
      }
      return {count: randomCount, status: 'Count is Odd'}
    })
  }

  render() {
    const {count, status} = this.state
    return (
      <div className="container">
        <div className="count-container">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p className="description">{status}</p>
          <button type="button" className="btn" onClick={this.updateCount}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

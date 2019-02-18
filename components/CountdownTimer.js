import React from 'react'
import moment from 'moment'

const RP_STARTDATE = "16 SEP 2019"
const FORMAT = "DD MMM YYYY"

class CountdownTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: undefined,
      timer: undefined
    }
  }

  componentDidMount () {
    let timer = setInterval(this.updateCountdown, 1000)
    this.setState({
      timer: timer
    })
  }

  updateCountdown = () => {
    const now = moment()
    const rpStartDate = moment(RP_STARTDATE, FORMAT)
    let diff = rpStartDate.diff(now, 'milliseconds')
    let duration = moment.duration(diff)
    this.setState({
      duration: duration
    })
  }

  componentWillUnmount () {
    clearInterval(this.state.timer);
  }

  render () {
    return (
      <div class="row">
        {
          this.state.duration != undefined ? (
              <div class="col-md-6 offset-md-3 row text-center">
                <div class="col">
                  <p>{this.state.duration.months()}</p>
                  <p>Months</p>
                </div>
                <div class="col">
                  <p>{this.state.duration.days()}</p>
                  <p>Days</p>
                </div>
                <div class="col">
                  <p>{this.state.duration.hours()}</p>
                  <p>Hours</p>
                </div>
                <div class="col">
                  <p>{this.state.duration.minutes()}</p>
                  <p>Minutes</p>
                </div>
                <div class="col">
                  <p>{this.state.duration.seconds()}</p>
                  <p>Seconds</p>
                </div>
              </div>
            ) : (
              <div class="col-md-6 offset-md-3 text-center">
                <p>Loading Countdown...</p>
              </div>
            )
          }
      </div>
    )
  }
}


export default CountdownTimer

import React, { Component } from 'react'
import moment from 'moment'

const RP_STARTDATE = "16 SEP 2019"
const FORMAT = "DD MMM YYYY"

class CountdownTimer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      duration: undefined,
      timer: undefined
    }
  }

  componentDidMount () {
    let timer = setInterval(this.update, 1000)
    this.setState({
      timer: timer
    })
  }

  update = () => {
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
      <div>
        {
          this.state.duration != undefined ? (
            <div class="countdown-timer animated fadeInUp container-fluid text-white">
              <div class="mx-auto row text-center col-md-7 col-lg-5 col-xl-4">
                <div class="col">
                  <p>{this.state.duration.months()}</p>
                  <span>Months</span>
                </div>
                <div class="col">
                  <p>{this.state.duration.days()}</p>
                  <span>Days</span>
                </div>
                <div class="col">
                  <p>{this.state.duration.hours()}</p>
                  <span>Hours</span>
                </div>
                <div class="col">
                  <p>{this.state.duration.minutes()}</p>
                  <span>Minutes</span>
                </div>
                <div class="col">
                  <p>{this.state.duration.seconds()}</p>
                  <span>Seconds</span>
                </div>
              </div>
            </div>
            ) : (
              <div class="col-md-6 offset-md-3 text-center">
                <p></p>
              </div>
            )
          }
        </div>
    )
  }
}


export default CountdownTimer

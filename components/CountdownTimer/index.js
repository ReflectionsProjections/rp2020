import React, { Component } from 'react';
import moment from 'moment';

import './CountdownTimer.scss';

const RP_STARTDATE = '16 SEP 2019';
const FORMAT = 'DD MMM YYYY';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: undefined,
      timer: undefined
    };
  }

  componentDidMount() {
    const timer = setInterval(this.update, 1000);
    this.setState({
      timer
    });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  update = () => {
    const now = moment();
    const rpStartDate = moment(RP_STARTDATE, FORMAT);
    const diff = rpStartDate.diff(now, 'milliseconds');
    const duration = moment.duration(diff);
    this.setState({
      duration
    });
  };

  render() {
    const { duration } = this.state;
    return (
      <div>
        {duration !== undefined ? (
          <div className="countdown-timer animated fadeInUp container-fluid text-white">
            <div className="mx-auto row text-center col-md-7 col-lg-5 col-xl-4">
              <div className="col">
                <p>{duration.months()}</p>
                <span>Months</span>
              </div>
              <div className="col">
                <p>{duration.days()}</p>
                <span>Days</span>
              </div>
              <div className="col">
                <p>{duration.hours()}</p>
                <span>Hours</span>
              </div>
              <div className="col">
                <p>{duration.minutes()}</p>
                <span>Minutes</span>
              </div>
              <div className="col">
                <p>{duration.seconds()}</p>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-6 offset-md-3 text-center">
            <p />
          </div>
        )}
      </div>
    );
  }
}

export default CountdownTimer;

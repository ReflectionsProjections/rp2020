import React, { Component } from 'react';
import moment from 'moment';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './CountdownTimer.scss';

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
          <Container
            fluid
            className={`animated fadeInUp text-white ${styles.countdownTimer}`}
          >
            <Col md={7} lg={5} xl={4} className="mx-auto text-center">
              <Row>
                <Col>
                  <p>{duration.months()}</p>
                  <span>Months</span>
                </Col>
                <Col>
                  <p>{duration.days()}</p>
                  <span>Days</span>
                </Col>
                <Col>
                  <p>{duration.hours()}</p>
                  <span>Hours</span>
                </Col>
                <Col>
                  <p>{duration.minutes()}</p>
                  <span>Minutes</span>
                </Col>
                <Col>
                  <p>{duration.seconds()}</p>
                  <span>Seconds</span>
                </Col>
              </Row>
            </Col>
          </Container>
        ) : (
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <p />
          </Col>
        )}
      </div>
    );
  }
}

export default CountdownTimer;

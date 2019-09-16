import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-scroll';

import Button from 'react-bootstrap/Button';
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
      diff: undefined,
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

  get isOver() {
    const { diff } = this.state;
    return diff < 0;
  }

  update = () => {
    const now = moment();
    const rpStartDate = moment(RP_STARTDATE, FORMAT);
    const diff = rpStartDate.diff(now, 'milliseconds');
    const duration = moment.duration(diff);
    this.setState({
      diff,
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
                {this.isOver ? (
                  <Col>
                    <Link
                      activeClass="active"
                      to="agenda"
                      spy
                      smooth="easeInOutQuad"
                      duration={500}
                      offset={-80}
                    >
                      <Button variant="outline-primary" size="lg">
                        Conference Agenda
                      </Button>
                    </Link>
                  </Col>
                ) : (
                  <>
                    {duration.days() !== 0 && (
                      <Col>
                        <p>{duration.days()}</p>
                        <span>Days</span>
                      </Col>
                    )}
                    {duration.hours() !== 0 && (
                      <Col>
                        <p>{duration.hours()}</p>
                        <span>Hours</span>
                      </Col>
                    )}
                    {duration.minutes() !== 0 && (
                      <Col>
                        <p>{duration.minutes()}</p>
                        <span>Minutes</span>
                      </Col>
                    )}
                    {duration.seconds() !== 0 && (
                      <Col>
                        <p>{duration.seconds()}</p>
                        <span>Seconds</span>
                      </Col>
                    )}
                  </>
                )}
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

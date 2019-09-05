import React, { Component } from 'react';
//  import {
//    Image, 
//    Transition
//  } from 'semantic-ui-react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import Section from '../../UIComponents/Section';
import { Timeline } from 'react-twitter-widgets';

import classNames from 'classnames';
import styles from './Dashboard.scss';
import DashboardClock from './components/dashboardClock';
import DashboardEvents from './components/dashboardEvents';
// import DashboardAnnouncements from './dashboardAnnouncements'
// import Clock from 'react-live-clock';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: props.sponsorImages.slice(0, 9),
      visibles: [true, true, true, true, true, true, true, true, true],
      enter: 750,
      exit: 750
    };
  }

  componentWillMount() {
    setInterval(() => {
      const { visibles } = this.state;
      const index = Math.floor(Math.random() * visibles.length);
      visibles[index] = false;

      this.setState({ visibles });
    }, 1000);
  }

  randomLogos = index => {
    const { sponsorImages } = this.props;
    let { logos, visibles } = this.state;
    const allLogos = sponsorImages;

    let newLogoIndex = Math.floor(Math.random() * allLogos.length);
    let newLogo = allLogos[newLogoIndex];
    while (logos.indexOf(newLogo) >= 0) {
      newLogoIndex = Math.floor(Math.random() * allLogos.length);
      newLogo = allLogos[newLogoIndex];
    }

    logos[index] = allLogos[newLogoIndex];
    visibles[index] = true;
    this.setState({
      logos: logos,
      visibles: visibles
    });
  };

  render() {
    const { logos, visibles, enter, exit } = this.state;

    return (
      <Container className={classNames(styles.dashboardContainer, styles.x)}>
        <Row>
          <Col>
            <Image className={styles.rpLogo} src={"../../static/assets/2019logo.svg"} />
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Image className={styles.rpWordmark} src={"../../static/assets/wordmarkblack.svg"} />
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3}}>
            <DashboardClock clock title="CURRENT TIME" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className={styles.logoRow}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(0)} in={visibles[0]}>
                <Image className={styles.logo} src={logos[0]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(1)} in={visibles[1]}>
                <Image className={styles.logo} src={logos[1]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(2)} in={visibles[2]}>
                <Image className={styles.logo} src={logos[2]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(3)} in={visibles[3]}>
                <Image className={styles.logo} src={logos[3]} fluid />
              </Transition>
            </Row>
          </Col>
          <Col>
            <DashboardEvents events={this.props.events} />
          </Col>
          <Col>
            <Timeline
              dataSource={{sourceTypr:'profile', screenName:'uiuc_rp'}}
              options={{chrome: 'transparent nofooter noheader noscrollbar', tweetLimit: 3, ariaPolite: 'rude', username:'uiuc_rp'}}
            />
          </Col>
          <Col>
          <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(4)} in={visibles[4]}>
                <Image className={styles.logo} src={logos[4]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(5)} in={visibles[5]}>
                <Image className={styles.logo} src={logos[5]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(6)} in={visibles[6]}>
                <Image className={styles.logo} src={logos[6]} fluid />
              </Transition>
            </Row>
            <Row className={`justify-content-center ${styles.logoRow}`}>
              <Transition timeout={ {enter, exit} } onExit={() => this.randomLogos(7)} in={visibles[7]}>
                <Image className={styles.logo} src={logos[7]} fluid />
              </Transition>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

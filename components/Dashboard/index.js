import React, { Component } from 'react';
import {
  Grid,
  Container,
  Segment,
  Responsive,
  Image,
  Transition
} from 'semantic-ui-react';
import { Timeline } from 'react-twitter-widgets';

import classNames from 'classnames';
import styles from './Dashboard.scss';
import DashboardClock from './components/dashboardClock';
// import DashboardEvents from './dashboardEvents'
// import DashboardAnnouncements from './dashboardAnnouncements'
// import Clock from 'react-live-clock';

export default class DashboardLarge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logos: props.sponsorImages.slice(0, 9),
      visibles: [true, true, true, true, true, true, true, true, true],
      visible: true,
      hide: 750,
      show: 750
    };
  }

  componentWillMount() {
    setInterval(() => {
      const { visibles } = this.state;
      const index = Math.floor(Math.random() * visibles.length);
      visibles[index] = false;

      this.setState({ visibles });
    }, 5000);
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
    const { logos, visible, visibles, hide, show } = this.state;

    return (
      <Grid className={styles.largeDashboardContainer} columns="equal">
        <Grid.Row>
          <Grid.Column className={styles.largeLeftSideContainer}>
            <div
              className={classNames(
                styles.largeBlockContainer,
                styles.rpLogoContainer
              )}
            >
              <Image
                src={'/static/assets/2019logo.svg'}
                size="large"
                centered
              />
            </div>
            {/* <div className={styles.largeBlockContainer}>
              <Segment basic className={styles.posterContainer}>
                <Image className={styles.posterImg} src={logos[0]} size='large' centered />
              </Segment>
            </div> */}
          </Grid.Column>
          <Grid.Column>
            <div className={styles.largeBlockContainer}>
              <DashboardClock clock title="CURRENT TIME" />
            </div>
            {/* <div className="largeBlockContainer">
              <DashboardEvents key="dashboardLarge" className="bottomContainer"/>
            </div> */}
          </Grid.Column>
          <Grid.Column className={styles.largeRightSideContainer}>
            <div className={styles.largeLogoContainer}>
              <Grid>
                <Grid.Row columns={1} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Segment basic className="logoContainer">
                      <div className="eventsTitle">Powered by:</div>
                      <Image
                        className={styles.sponsorLogo}
                        src={logos[1]}
                        size="medium"
                        centered
                      />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className={styles.largeBlockContainer}>
              <Segment basic className={styles.twitterContainer}>
                <Timeline
                  dataSource={{ sourceTypr: 'profile', screenName: 'uiuc_rp' }}
                  options={{
                    chrome: 'transparent nofooter noheader noscrollbar',
                    tweetLimit: 3,
                    ariaPolite: 'rude',
                    username: 'uiuc_rp'
                  }}
                />
              </Segment>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

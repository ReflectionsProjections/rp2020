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

import styles from './Dashboard.scss';
import DashboardClock from './components/dashboardClock';
// import DashboardEvents from './dashboardEvents'
// import DashboardAnnouncements from './dashboardAnnouncements'
// import Clock from 'react-live-clock';

export default class DashboardLarge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // logos: [
      //   "amazon_full.png",
      //   "braintree.png",
      //   "cf_placeholder.png",
      //   "lyft_full.png",
      //   "northern_trust.jpg",
      //   "qualtrics_full.png",
      //   "quora_full.png",
      //   "sf_placeholder.png"
      // ],
      visibles: [true, true, true, true, true, true, true, true, true],
      visible: true,
      hide: 750,
      show: 750
    };
  }

  componentWillMount() {
    setInterval(() => {
      let { visibles } = this.state;
      var index = Math.floor(Math.random() * visibles.length);
      visibles[index] = false;

      this.setState({ visibles: visibles });
    }, 5000);
  }

  // randomLogos = (index) => {
  //   let {logos, visibles} = this.state;
  //   const allLogos = [
  //     "fulcrumtransparent-regular", "oathtransparent", "forcepointtransparent", "facebooktransparent", "microsofttransparent", "schlumbergertransparent", "amadeustransparent", "jacksontransparent",
  //     "caterpillartransparent", "googlecloudplatformtransparent", "imotransparent", "rockwellcollinstransparent", "synchronytransparent", "rubriktransparent", "qtumtransparent", "goldmantransparent", "johndeeretransparent"
  //   ];

  //   let newLogoIndex = Math.floor(Math.random() * allLogos.length);
  //   let newLogo = allLogos[newLogoIndex];
  //   while (logos.indexOf(newLogo) >= 0) {
  //     newLogoIndex = Math.floor(Math.random() * allLogos.length);
  //     newLogo = allLogos[newLogoIndex];
  //   }

  //   //logos[index] = allLogos[newLogoIndex];
  //   visibles[index] = true;
  //   this.setState({
  //     logos: logos,
  //     visibles: visibles
  //   });
  // }

  render() {
    const { /*logos,*/ visible, visibles, hide, show } = this.state;

    return (
      <Grid className={styles.largeDashboardContainer} columns="equal">
        <Grid.Row>
          <Grid.Column className={styles.largeLeftSideContainer}>
            {/* <div className="largeBlockContainer rpLogoContainer">
              <Image src={'/{process.env.PUBLIC_URL + "/assets/full-logo_2018_white.svg'} size = 'large' centered/>
            </div>
            <div className="largeBlockContainer">
              <Segment basic className="posterContainer">
                <Image className='posterImg' src={'../{process.env.PUBLIC_URL + "/assets/posters/startup_fair.png'} size='large' centered />
              </Segment>
            </div> */}
          </Grid.Column>
          <Grid.Column>
            <div className={styles.largeBlockContainer}>
              <DashboardClock clock={true} title="CURRENT TIME" />
            </div>
            {/* <div className="largeBlockContainer">
              <DashboardEvents key="dashboardLarge" className="bottomContainer"/>
            </div> */}
          </Grid.Column>
          <Grid.Column className={styles.largeRightSideContainer}>
            {/* <div className="largeLogoContainer">
              <Grid>
                <Grid.Row columns={1} className="logoRow">
                  <Grid.Column className="logoCol">
                    <Segment basic className="logoContainer">
                      <div className="eventsTitle">
                        Powered by:
                      </div>
                      <Image className="sponsorLogo" src={'../{process.env.PUBLIC_URL + "/assets/img/sponsors/sponsors2018/jobfair/petabyte/microsoft_full.png'} size='medium' centered />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div> */}
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

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Row, Col, Container } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog } from '@fortawesome/free-solid-svg-icons';
import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './TabsComponent.scss';

const TabsComponent = () => {
  const dataObject = {
    userInformation: [
      {
        column: 'Description',
        value:
          ' Many people think that Lorem Ipsum is a ' +
          'pseudo-Latin set of words taken from the ceiling, but this is not entirely true. ' +
          'Its roots go back to one fragment of classical latin 45 years BC, that' +
          'is, more than two millennia ago.',
      },
      { column: 'Current City', value: 'Vema, Goa' },
      { column: 'Hometown', value: 'Mumbai, Maharashtra' },
      { column: 'Email address', value: 'karlxavier@gmail.com' },
      { column: 'Language', value: 'English, Hindi, Marathi' },
    ],
  };

  return (
    <>
      <Tabs className={styles.TabsWrapper}>
        <TabList>
          <div>
            <Tab id="aboutMe">About me</Tab>
            <Tab id="additionalInfo">Additional info</Tab>
            <Tab id="credits">Credits</Tab>
            <div className={styles.IconsWrapper}>
              <span className={styles.Bell}>
                <FontAwesomeIcon icon={faBell} />
              </span>
              <span className={styles.Cog}>
                <FontAwesomeIcon icon={faCog} />
              </span>
            </div>
          </div>
        </TabList>
        <TabPanel className={styles.TabPanel}>
          <h4>Karl Xavier</h4>
          {dataObject.userInformation.map(item => {
            return (
              <Container key={item.column}>
                <Row className={styles.TabsItemRow}>
                  <Col lg={3} md={3} sm={12} className={styles.TabsItemCol}>
                    {item.column}:
                  </Col>
                  <Col lg={9} md={9} sm={12}>
                    {item.value}
                  </Col>
                </Row>
              </Container>
            );
          })}
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          <h4>Additional info</h4>
        </TabPanel>
        <TabPanel className={styles.TabPanel}>
          <h4>Credits</h4>
        </TabPanel>
      </Tabs>
    </>
  );
};

TabsComponent.whyDidYouRender = true;
export default withStyles(styles)(React.memo(TabsComponent));

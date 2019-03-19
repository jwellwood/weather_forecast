import React, { Component } from 'react';
import { Collapse, Button, Container, Row, Col } from 'reactstrap';
import classes from './ExtraDetails.module.css';

class ExtraDetails extends Component {
  state = { collapse: false };

  toggle = () => {
    this.setState(state => ({ collapse: !state.collapse }));
  };

  render() {
    const { details } = this.props;

    const data = (icon, value, tag) => {
      return { icon, value, tag };
    };

    const listItems = [
      data('wi wi-cloudy', details.clouds, '%'),
      data('wi wi-barometer', details.pressure, 'hPa'),
      data('wi wi-humidity', details.humidity, '%'),
      data('wi wi-small-craft-advisory', details.windSpeed, 'kph'),
      data('wi wi-wind-direction', details.windDirection, 'º'),
    ];

    return (
      <div>
        <Button
          color="primary"
          onClick={this.toggle}
          style={{ marginBottom: '1rem' }}
        >
          <i className="fas fa-info-circle" />
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Container>
            <Row className={classes.Container}>
              {listItems.map(item => (
                <Col key={Math.random()}>
                  <div>
                    <i className={item.icon + ' ' + classes.Icon} />
                    <div className={classes.Value}>
                      {item.value}
                      <span className={classes.Tag}>{item.tag}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </Collapse>
      </div>
    );
  }
}

export default ExtraDetails;

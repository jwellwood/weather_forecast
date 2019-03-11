import React from 'react';
import { Container, Col } from 'reactstrap';
import classes from './Message.module.css';

const Message = () => (
  <Container>
    <Col className={classes.Container} xs={12}>
      <div className={classes.Message}>Type a city to search</div>
    </Col>
  </Container>
);

export default Message;

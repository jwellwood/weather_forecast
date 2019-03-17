import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PageContainer = props => {
  const { children } = props;
  return (
    <Container style={{ padding: '2px' }}>
      <Col
        style={{ textAlign: 'center', margin: 'auto', padding: 0 }}
        xs="12"
        sm="12"
        m="10"
        lg="6"
      >
        {children}
      </Col>
    </Container>
  );
};

export default PageContainer;

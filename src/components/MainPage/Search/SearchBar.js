import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Alert,
} from 'reactstrap';

const SearchBar = props => {
  const { getCurrentWeather, onReset, error } = props;
  return (
    <div>
      <Form onSubmit={getCurrentWeather}>
        <InputGroup>
          <Input name="city" placeholder="Search..." />
          <InputGroupAddon addonType="append">
            <Button type="submit" color="primary">
              <i className="fas fa-search" />
            </Button>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <Button type="reset" onClick={onReset}>
              <i className="fas fa-undo-alt" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
      {error ? (
        <Alert color="warning">There was a problem. Try again</Alert>
      ) : null}
    </div>
  );
};

SearchBar.propTypes = {
  getCurrentWeather: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default SearchBar;

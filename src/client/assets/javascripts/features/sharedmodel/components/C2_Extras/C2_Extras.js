import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, Checkbox } from 'react-bootstrap';

export default class Extras extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
  };

  render() {
    return (
    <FormGroup>
      <ControlLabel style={{marginRight: 10 + 'px'}}>Extras</ControlLabel>
      <Checkbox style={{display:"inline"}}
                checked={ this.props.model.extras }
                disabled={ !this.props.model.extrasEnabled }
                onChange={(e) => this.props.actions.updateExtras(e.target.checked)}
      />
    </FormGroup>

    );
  }
}

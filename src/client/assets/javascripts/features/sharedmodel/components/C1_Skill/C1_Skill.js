import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class Skill extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
  };

  render() {
    return (
      <FormGroup>
        <ControlLabel>Skill</ControlLabel>
        <FormControl
          type="text"
          value={this.props.model.skill}
          placeholder="Enter skill"
          onChange={(e) => this.props.actions.updateSkill(e.target.value)}
        />
      </FormGroup>
    );
  }
}

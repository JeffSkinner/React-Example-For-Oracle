import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default class Level extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
  };

  renderOptions() {

    return this.props.model.levelSelection.map((item) =>
      (
      <option key={item.value} value={item.value}>{item.label}</option>
      )
    );
  }
  render() {
    return (
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Experience Level</ControlLabel>
        <FormControl componentClass="select"
                     placeholder="Select Level"
                     value={this.props.model.level}
                     onChange={(e) => this.props.actions.updateLevel(e.target.value)}>
          <option value="-1">Please Select...</option>
          {this.renderOptions()}
        </FormControl>
      </FormGroup>
    );
  }
}

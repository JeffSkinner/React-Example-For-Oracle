import React, { Component, PropTypes } from 'react';

import Skill from './C1_Skill';
import Extras from './C2_Extras';
import Level from './C3_Level';
import './SharedModelApp.scss';

export default class SharedModelLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    sharedModel: PropTypes.object.isRequired
  };

  render() {
    const { sharedModel , actions } = this.props;

    return (
      <div className="sharedModelApp">
        <Skill  model={sharedModel} actions={actions} />
        <Extras model={sharedModel} actions={actions} />
        <Level  model={sharedModel} actions={actions} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as sharedModelActions, selector } from '../';
import SharedModelLayout from './SharedModelLayout';

@connect(selector, (dispatch) => ({
  actions: bindActionCreators(sharedModelActions, dispatch)
}))
export default class SharedModelView extends Component {
  render() {
    return (
      <div>
        <SharedModelLayout {...this.props} />
      </div>
    );
  }
}

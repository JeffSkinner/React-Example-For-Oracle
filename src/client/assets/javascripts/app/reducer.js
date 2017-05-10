import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import sharedModel, { NAME as sharedModelName } from 'features/sharedmodel';

export default combineReducers({
  routing,
  [sharedModelName]: sharedModel
});

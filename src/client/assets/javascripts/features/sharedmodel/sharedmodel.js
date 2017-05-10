import { createStructuredSelector } from 'reselect';
import assign from 'lodash/assign';

import { State } from 'models/sharedModel';

// Action Types
const UPDATE_SKILL = 'redux-app/sharedmodel/UPDATE_SKILL';
const UPDATE_EXTRAS = 'redux-app/sharedmodel/UPDATE_EXTRAS';
const UPDATE_LEVEL = 'redux-app/sharedmodel/UPDATE_LEVEL';

// This will be used in our root reducer and selectors

export const NAME = 'sharedModel';

const _levelSelection = [ { label: "Guru", value: 0 }, { label: "Expert", value: 1 }, { label: "Intermediate", value: 2 }, { label: "Beginner", value: 3 } ];

// Define the initial state
const initialState: State =  {
  skill: '',
  extras: false,
  extrasEnabled: false,
  level: -1,
  levelSelection: [ { label: "Expert", value: 1 }, { label: "Intermediate", value: 2 }, { label: "Beginner", value: 3 } ]
};

// Reducer
export default function reducer(state: State = initialState, action: any = {}): State {
  switch (action.type) {

    case UPDATE_SKILL: {

      const len = action.value.length;

      let enabled = false;

      if (len >= 3){
        enabled = true;
      }

      return assign({}, state, {
        skill: action.value,
        extrasEnabled: enabled
      });

    }

    case UPDATE_EXTRAS: {

      let selectionArray = _levelSelection.slice(0);
      let selection = action.value;
      let selectionValue = state.level;

      if (selection === false){
        selectionArray = _levelSelection.slice(1);
      }

      if (selection === false  && selectionValue ===_levelSelection[0].value.toString() ){
        selectionValue = -1;
      }

      return assign({}, state, {
        extras: selection,
        level: selectionValue,
        levelSelection: selectionArray
      });

    }

    case UPDATE_LEVEL: {

      return assign({}, state, {
        level: action.value
      });

    }

    default:
      return state;
  }
}

// Action Creators
const updateSkill = (value: string) => ({
   type: UPDATE_SKILL,
  value
});

const updateExtras = (value: boolean) => ({
  type: UPDATE_EXTRAS,
  value
});

const updateLevel = (value: number) => ({
  type: UPDATE_LEVEL,
  value
});

// Selectors

const sharedModel = (state) => state[NAME];

export const selector = createStructuredSelector({
  sharedModel
});

export const actionCreators = {
  updateSkill,
  updateExtras,
  updateLevel
};

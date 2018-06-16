import { MUTATIONS } from './_constants';

export default {
  [MUTATIONS.CHANGE_NAME] (state, name) {
    state.name = name;
  },
  [MUTATIONS.CHANGE_PERSON] (state, person) {
    state.person = person;
  },
  [MUTATIONS.CHANGE_DIRECTION] (state, direction) {
    state.direction = direction;
  }
};

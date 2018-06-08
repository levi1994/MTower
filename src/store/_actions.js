import { ACTIONS, MUTATIONS } from './_constants';

export default {
  [ACTIONS.CHANGE_NAME] ({ commit }, name) {
    commit(MUTATIONS.CHANGE_NAME, name);
  },
  [ACTIONS.CHANGE_PERSON] ({ commit }, person) {
    commit(MUTATIONS.CHANGE_PERSON, person);
  }
};

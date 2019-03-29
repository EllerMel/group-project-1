export default {
    addUserAction({ state, commit }, userObj) {
        commit('addUser', userObj);
    }
}
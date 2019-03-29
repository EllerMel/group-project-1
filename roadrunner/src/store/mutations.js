export const STORAGE_KEY_CARS = 'roadrunner-cars-vuejs'
export const STORAGE_KEY_USERS = 'roadrunner-users-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const mutations = {

  addUser(state, userObj) {
    state.allUsers.push(userObj);
  }
}
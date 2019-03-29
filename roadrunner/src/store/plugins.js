import { STORAGE_KEY_USERS } from './mutations'
//import { STORAGE_KEY_CARS } from './mutations'

const localStoragePlugin = store => {
    store.subscribe ((mutation, { cars }) =>{
        //window.localStorage.setItem(STORAGE_KEY_CARS, JSON.stringify(cars))
    }),
    store.subscribe ((mutation, { allUsers }) =>{
        window.localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(allUsers))
    })
}

export default process.env.NODE_ENV !== 'production'
? [localStoragePlugin] : [localStoragePlugin]
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

const state = { 
    cars: [
      {
        id: "C1",
        make: "Nissan",
        model: "GT-R",
        year: "2016",
        color: "Black",
        availabilty: false,
        isPromo: true,
        img: "../img/2016NissanGT-R.png",
        location: []
      },
      {
        id: "C2",
        make: "Bentley",
        model: "Continental",
        year: "2015",
        color: "Red",
        availabilty: false,
        isPromo: false,
        img: "../img/2015BentleyContinentalGTC.png",
        location: []
      },
      {
        id: "C3",
        make: "Ferrai",
        model: "Spider",
        year: "2015",
        color: "Yellow",
        availabilty: false,
        isPromo: false,
        img: "../img/2015Ferrari458ItaliaSpider.png",
        location: []
      },
      {
        id: 'C4',
        make: "BMW",
        model: "I8",
        year: "2016",
        color: "White",
        availabilty: false,
        isPromo: true,
        img: "../img/2016BMWi8.png",
        location: []
      },
      {
        id: "C5",
        make: "Lamborghini",
        model: "Huracan",
        year: "2016",
        color: "Green",
        availabilty: false,
        isPromo: false,
        img: "../img/2016LamborghiniHuracan.png",
        location: []
      },
      {
        id: "C6",
        make: "Mclaren",
        model: "650s Spider",
        year: "2016",
        color: "Orange",
        availabilty: false,
        isPromo: false,
        img: "../img/2016Mclaren650sSpider.png",
        location: []
      },
      {
        id: "C7",
        make: "Porsche",
        model: "911",
        year: "2016",
        color: "Red",
        availabilty: false,
        isPromo: false,
        img: "../img/2016Porsche911GT3.png",
        location: []
      },
      {
        id: "C8",
        make: "Lamborghini",
        model: "Aventador",
        year: "2017",
        color: "Green",
        availabilty: false,
        isPromo: true,
        img: "../img/2017LamborghiniAventadorRoadster.png",
        location: []
      },
      {
        id: "C9",
        make: "Lamborghini",
        model: "Huracan Spyder",
        year: "2017",
        color: "Yellow",
        availabilty: false,
        isPromo: false,
        img: "../img/2017LamborghiniHuracanSpyder.png",
        location: []
      },
      {
        id: "C10",
        make: "Ferrari",
        model: "488 Spider",
        year: "2018",
        color: "White",
        availabilty: false,
        isPromo: false,
        img: "../img/2018Ferrari488Spider.png",
        location: []
      },
    ],
    users: [
      {
        name: "name",
        email: "email address",
        age: 34,
        phone: "895-555-5555",
        password: "password",
        senior: false
      },
      {
        name: "name",
        email: "email address",
        age: 66,
        phone: "895-555-5555",
        password: "password",
        senior: true
      }
    ],
}

export default new Vuex.Store({
  state, 
  actions, 
  plugins,
  mutations,
  getters: {
    promotedCars: state => {
      return state.cars.filter(cars => cars.isPromo)
    }
  }
})

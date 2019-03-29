import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY_USERS } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

const state = { 
    cars: [
      {
        id: "1",
        make: "Nissan",
        model: "GT-R",
        year: "2016",
        color: "Black",
        availabilty: false,
        isPromo: true,
        img: "../img/2016NissanGT-R.png",
        //Awesome Inc
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28327.23730047265!2d-84.48043223607823!3d38.02851689037736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92c7783d2b2a2d15!2sAwesome+Inc!5e0!3m2!1sen!2sus!4v1553782384275!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "2",
        make: "Bentley",
        model: "Continental",
        year: "2015",
        color: "Red",
        availabilty: false,
        isPromo: false,
        img: "../img/2015BentleyContinentalGTC.png",
        //Chipotle 
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.187986041394!2d-84.50487498485766!3d38.042705904472285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244953d3f165f%3A0x7024694a80baff46!2sChipotle+Mexican+Grill!5e0!3m2!1sen!2sus!4v1553782493144!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "3",
        make: "Ferrai",
        model: "Spider",
        year: "2015",
        color: "Yellow",
        availabilty: false,
        isPromo: false,
        img: "../img/2015Ferrari458ItaliaSpider.png",
        //Random
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.9871985499553!2d-84.51316288485947!3d37.97742590824754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88425b9d59ba5ad5%3A0xd4ceed2f3d15a490!2s408+Lenney+Ct%2C+Lexington%2C+KY+40517!5e0!3m2!1sen!2sus!4v1553782697152!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: '4',
        make: "BMW",
        model: "I8",
        year: "2016",
        color: "White",
        availabilty: false,
        isPromo: true,
        img: "../img/2016BMWi8.png",
        //Wal-Mart
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.0118257515287!2d-84.48276458485695!3d38.07010570288613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424452b2d1e673%3A0xf0f768d1044eb38b!2sWalmart+Supercenter!5e0!3m2!1sen!2sus!4v1553782804488!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "5",
        make: "Lamborghini",
        model: "Huracan",
        year: "2016",
        color: "Green",
        availabilty: false,
        isPromo: false,
        img: "../img/2016LamborghiniHuracan.png",
        //Bigg Blue Martini
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.9459728950187!2d-84.50247768485755!3d38.048345204145946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244ecd9665263%3A0xcb7e4976ac4f9fc1!2sBigg+Blue+Martini!5e0!3m2!1sen!2sus!4v1553782881752!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "6",
        make: "Mclaren",
        model: "650s Spider",
        year: "2016",
        color: "Orange",
        availabilty: false,
        isPromo: false,
        img: "../img/2016Mclaren650sSpider.png",
        //Goodfellas
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5926424876234!2d-84.52222048485739!3d38.05657710366942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244822e97e7f5%3A0x2520a9e92658e444!2sGoodfellas+Distillery!5e0!3m2!1sen!2sus!4v1553783044022!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "7",
        make: "Porsche",
        model: "911",
        year: "2016",
        color: "Red",
        availabilty: false,
        isPromo: false,
        img: "../img/2016Porsche911GT3.png",
        //Champs
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0993096136426!2d-84.53559338485887!3d37.99814400704994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88425c978fc32003%3A0xd3596ef4c2d128ec!2sChamps+Entertainment+Complex!5e0!3m2!1sen!2sus!4v1553783099789!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'

      },
      {
        id: "8",
        make: "Lamborghini",
        model: "Aventador",
        year: "2017",
        color: "Green",
        availabilty: false,
        isPromo: true,
        img: "../img/2017LamborghiniAventadorRoadster.png",
        //Bourbon n Toulouse
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.7425191884904!2d-84.49272218485807!3d38.02978170522007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244daa9d7f63d%3A0x2b2038869805c157!2sBourbon+n&#39;+Toulouse!5e0!3m2!1sen!2sus!4v1553783187750!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "9",
        make: "Lamborghini",
        model: "Huracan Spyder",
        year: "2017",
        color: "Yellow",
        availabilty: false,
        isPromo: false,
        img: "../img/2017LamborghiniHuracanSpyder.png",
        //McCarthy's
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.009739636925!2d-84.50071878485761!3d38.046859404231846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244ec6025ea87%3A0xc967c0b42d79b78d!2sMcCarthy&#39;s+Irish+Bar!5e0!3m2!1sen!2sus!4v1553783323739!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
      {
        id: "10",
        make: "Ferrari",
        model: "488 Spider",
        year: "2018",
        color: "White",
        availabilty: false,
        isPromo: false,
        img: "../img/2018Ferrari488Spider.png",
        //Fayette Mall
        location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.514980168509!2d-84.53060928485918!3d37.98844690761042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88425c84ac056a19%3A0x50d6999c88cea9d2!2sFayette+Mall!5e0!3m2!1sen!2sus!4v1553783388771!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
      },
    ],
    users: [
      {
        name: "",
        email: "",
        age: "",
        phone: "",
        password: "",
        memberType: ""
      }
    ],
    allUsers: JSON.parse(window.localStorage.getItem(STORAGE_KEY_USERS) || '[]'),
}

export default new Vuex.Store({
  state, 
  actions, 
  plugins,
  mutations,
  getters: {
    promotedCars: state => {
      return state.cars.filter(cars => cars.isPromo)
    },
    currentCar(state){
      return id => state.cars.filter(cars => {
        return cars.id === id
        });
      }
    },
    // created (){
    //   console.log(JSON.stringify(this.users));
    // }
})

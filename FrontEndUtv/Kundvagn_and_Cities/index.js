
Vue.component('controls', {
  
})

Vue.component('greet', {
  props: {
    playerName: {
      type: String,
      default: "Player"
    }
  },
  template: '<div>Välkommen till Blackjack, {{playerName}}!</div>'
})

// Vue.component('greet', {
//   props: ["name"],
//  template: "<div>välkommen till Blackjack,{{name}}!<div>"
//  };

// Vue.component('greet', {
//   props: ['initialValue'],
//   data() { 
//     return {
//       counter: 0
//     }
//   },
//   methods: {
//     onClick() {
//       this.counter = this.counter + 1
//     }
//   },
//   template: '<div v-on:click="onClick">Välkommen till Blackjack!{{ \'!\'.repeat(counter) }}</div>',
// })

new Vue({
  el: '#app'
})


new Vue({
  created() {
    fetch('https://avancera.app/cities/')
    .then((response)  => response.json())
    .then((result) => this.cities = result)
  },
  data: {
    cities: null,
    name: null,
    population: null
  },
  methods : {
    addCity() {
      fetch('https://avancera.app/cities/', {
        body: JSON.stringify({ 
          name: this.name, 
          population: this.population,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then((response) => {
        return response.json()
      }).then((result) => {
        console.log(result)
        this.name = result.name;
        this.population = result.population;

        // Override Cities data with the new result.
        this.cities = result;
      })
    }
  },
  el: "#cities"
});

function deleteCity() {

}

function updateCity() {
  var cityID = prompt('Enter City ID');
  var cityName = prompt('Enter cityName');
  var cityPop = prompt('Enter cityPop');

  fetch('https://avancera.app/cities/' + cityID, {
  body: JSON.stringify({ id: cityID, name: cityName, population: cityPop,}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT'
}).then(function (response) {
  return response.json()
}).then(function (result) {
  console.log(result)
})
}



var kundvagn = new Vue({
  computed: {
    total() {
      return Object.values(this.products).reduce(
        (accumulator, value) => accumulator + value.price * value.quantity,
        0
      )
    }
  },
  data: {
    products: {
      'dd3ce0a3-1d30-4e3e-bcec-7095590019d9': { name: 'Jacket', price: 200, quantity: 0 },
      'faf68d1f-8f3e-4668-891c-56118cc330f4': { name: 'Pants', price: 100, quantity: 0 },
      'dd2bb41e-7f0a-4cb8-884b-588f9457dd54': { name: 'Shoes', price: 100, quantity: 0 }
    }
  },
  el: '#kundvagn',
  methods: {
    addToCart(productId) {
      this.products[productId].quantity++
    }
  }
})




/*
var app = new Vue({
  el: "#app",
  data: {
    name: 'Jon',
    avatar: 'a1389e6c-ab8f-46ac-9e51-12fc49a59cb4.png',
    players: [
      { name: 'Alice', credits: 1 },
      { name: 'Jon', credits: 2 },
      { name: 'Bob', credits: 3 }
    ],
    value: 1,
    userName: null,
    message: null,
  },
  methods: {
    
    onClick: function() {
      alert('Välkommen till ett Blackjack-spel!');
    },
    decrease: function() {
      this.value = this.value -1
    },
    increase: function() {
      this.value = this.value +1
    },
    onSubmit: function() {
      this.message = 'Hej ' + this.userName + '!';
    },
  }
})
*/


/*

var app = new Vue({
    el: "#app",
    data: {
        message: 'Välkommen till ett Blackjack-spel!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

*/